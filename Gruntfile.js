module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      shell: {
        patternlab: { // compiles patterns ONLY
          command: "php core/builder.php -gp"
      }
    },
    watch: { // watching for changes in anything that is a .mustache or .json in /source
      html: {
        files: ['source/_patterns/**/*.mustache', 'source/**/*.json'],
        tasks: ['shell:patternlab'],
        options: {
          spawn: false
        }
      }
    }
  });

  // =========== Plugins ============== //

  // Watches for changes to files
  grunt.loadNpmTasks('grunt-contrib-watch');

  // allows you to run any command from within Grunt
  grunt.loadNpmTasks('grunt-shell');

  // Tasks
  grunt.registerTask('default', ['watch', 'shell:patternlab']);
};
