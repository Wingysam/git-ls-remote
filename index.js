const spawn = require('spawn-please')
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  if (!req.query.url) {
    res.header('Content-Type', 'text/plain')
    return res.sendFile(path.join(__dirname, 'README.md'))
  }

  try {
    const git = await spawn('git',
      ['ls-remote', req.query.url],
      { env: { GIT_ASKPASS: 'true' } } // fail on auth requirement
    )
    // empty response means the server returned 200 OK on git's probe, but doesn't have any refs
    if (!git.length) return res.send({ empty: true })
    return res.send({ empty: false })
  } catch {
    // Error means git got a 404 (probably, api might return invalid responses if the server can't be reached)
    res.send({ empty: true })
  }
})

app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`))
