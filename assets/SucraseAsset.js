const {Asset} = require('parcel-bundler');
const {transform} = require("sucrase");

class SucraseAsset extends Asset {
    constructor(){
        this.type = 'js';
    }
    async transform(){
        let options = {transforms: ["typescript", "imports", "flow", "jsx", "react-hot-loader"]}
        let compiled = transform(this.contents, options);
        return compiled.code;
    }
    async generate(){
        const code = this.transform()
        return [ {
            type: 'js',
            value: code,
        }]
    }
}
module.exports = SucraseAsset;