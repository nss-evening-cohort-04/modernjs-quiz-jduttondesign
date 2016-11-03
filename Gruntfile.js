module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['robot.js'],
      options: {
        predef: [ "document", "console", "$"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
   
    
    watch: {
      javascripts: {
        files: ['robot.js'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', [ 'jshint', 'watch']);
};