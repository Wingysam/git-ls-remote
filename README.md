# git-ls-remote
Simple API to return the contents of `git ls-remote <url>` for a given url.

## License
This project is licensed MIT, you can freely use it for any purpose.

## Install (dockerless)
```sh
npm install
```

## Build & Publish (docker)
```
docker build . -t you/git-ls-remote
docker push you/git-ls-remote
```

## Run (dockerless)
```
PORT=8080 node index.js
```

## Run (docker)
```
docker run --rm -it -p 8080:80 you/git-ls-remote
```

## Usage
```js
;(async () => { // IIFE to avoid polluting scope, async to allow async/await
  const POTENTIAL_REPO = 'https://github.com/Wingysam/git-ls-remote'
  const response = await fetch(`http://localhost:8080?url=${encodeURIComponent(POTENTIAL_REPO)}`)
  const { empty } = await response.json()

  console.log(`The repository ${empty ? 'does not' : 'does'} exist.`)
})()
```

# About Developer
Hi, I'm Wingy. This is a quick project I made because I needed it. My website is [wingysam.xyz](https://wingysam.xyz). Please [hire me](https://wingysam.xyz/hire).

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C1C2347HB)