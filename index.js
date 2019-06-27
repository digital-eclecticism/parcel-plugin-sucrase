const Bundler = require('parcel-bundler')

let bundler = new Bundler('input.js')
bundler.addAssetType('.js', require.resolve('./assets/SucraseAsset'))
