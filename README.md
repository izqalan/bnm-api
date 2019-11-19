

# BNM Open API wrapper
> Javascript warapper for Bank Negara open API. (previously known as my-bnm)

[![NPM](https://nodei.co/npm/bnm-api.png)](https://nodei.co/npm/bnm-api/)

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)


## Installation

NPM

```sh
npm install bnm-api
```


## Usage example
#### Import
```
var bnm = require('bnm-api')
```
The wrapper can only be used in `async` methods or with `.then()`.
```
bnm.function(value).then(response => console.log(response))
```
or
```
async function run(){
    return bnm.function(value)
}
run().then(res => console.log(res))
```

_For more examples and usage, please refer to the [wiki](https://github.com/izqalan/bnm-api/wiki)._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
git clone https://github.com/izqalan/bnm-api
npm install
npm run test
```

## Contributing

1. Fork it (<https://github.com/izqalan/bnm-api/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/izqalan/bnm-api/wiki
