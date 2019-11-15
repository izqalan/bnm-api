

# BNM Open API Node Module
> Javascript library of Bank Negara open API.

[![NPM](https://nodei.co/npm/my-bnm.png)](https://nodei.co/npm/my-bnm/)

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)


## Installation

NPM

```sh
npm install my-bnm
```


## Usage example
#### Import
```
var bnm = require('my-bnm')

```
The library can only be used in `async` methods or with `.then()`.
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

_For more examples and usage, please refer to the [Wiki][https://github.com/izqalan/bnm-api/wiki]._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
git clone https://github.com/izqalan/bnm-api
npm install
npm run test
```

## Release History

* 1.0.1
    * Initial release
    * 1.0.2
        * Docs

## Contributing

1. Fork it (<https://github.com/izqalan/bnm-api/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
