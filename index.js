
/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-manhattan-sass',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeForStyles: function() {
    var assetGemPaths = {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles'
    };

    var bourbonPath = path.join(this.project.bowerDirectory, 'bourbon', 'app');
    var bourbonTree = new Funnel(this.treeGenerator(bourbonPath), assetGemPaths);

    var neatPath = path.join(this.project.bowerDirectory, 'neat', 'app');
    var neatTree = new Funnel(this.treeGenerator(neatPath), assetGemPaths);

    var manhattanPath = path.join(this.project.bowerDirectory, 'manhattan', 'app');
    var manhattanTree = new Funnel(this.treeGenerator(manhattanPath), assetGemPaths);

    return new MergeTrees([bourbonTree, neatTree, manhattanTree]);
  }
};
