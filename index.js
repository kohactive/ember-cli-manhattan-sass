
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
    var bourbonPath = path.join(this.project.bowerDirectory, 'bourbon', 'app');
    var bourbonTree = new Funnel(this.treeGenerator(bourbonPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles/bourbon'
    });

    var neatPath = path.join(this.project.bowerDirectory, 'neat', 'app');
    var neatTree = new Funnel(this.treeGenerator(neatPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles/neat'
    });

    var manhattanPath = path.join(this.project.bowerDirectory, 'manhattan', 'app');
    var manhattanTree = new Funnel(this.treeGenerator(manhattanPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles/manhattan'
    });

    return new MergeTrees([bourbonTree, neatTree, manhattanTree]);
  }
};
