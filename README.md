# hashley

**Hashley** provides a minimal function for most common file checksum pattern.

## Details

- Uses `sha256` by default.
- No dependencies beyond the node.js default crypto.

## Install

`npm install hashley`

## Usage

```js
import hash from 'hashley';

var content = 'This is a test of hashley';
var shasum = hash(content);
console.log(shasum);
```

## Links

### Development Homepage

[https://github.com/alexstevovich/hashley](https://github.com/alexstevovich/hashley)

_This link might become hashley-node in the future if conflicts arise._

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
