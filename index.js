module.exports = function(bundler){
    bundler.addAssetType('.js', require.resolve('./assets/SucraseAsset'))
}

