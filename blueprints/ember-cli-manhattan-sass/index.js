/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {
        name: 'bourbon',
        target: '~> 4.2'
      },
      {
        name: 'neat',
        target: '^1.7.4'
      },
      {
        name: 'manhattan',
        target: '0.5.1'
      }
    ]);
  }
};
