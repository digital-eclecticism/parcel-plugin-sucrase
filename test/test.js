const assertBundleTree = require('parcel-assert-bundle-tree');
const SucrasePlugin = require('../index');
const Bundler = require('parcel-bundler');
const input = require('./input');

describe('basic', function() {
    it('Should create a basic bundle', async function() {
      // Init bundler
      const bundler = new Bundler(input);
      // Registers the plugins asset types
      await SucrasePlugin(bundler);
      // Bundle the code
      const bundle = await bundler.bundle();
  
      // Compare bundle to expected
      assertBundleTree(bundle, {
        name: 'index.html',
        assets: ['index.html'],
        childBundles: [
          {
            type: 'js',
            assets: ['index.js']
          }
        ]
      });
    });
  });