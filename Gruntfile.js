module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        files: {
          'dist/outsystems-humanizer.js': ['src/**/*.js']
        },
        options: {
          banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> - build <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n' +
            ' * Contributors: <%= pkg.contributors.map( x => x.author ).join(", ") %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %>; Licensed MIT\n' +
            ' */\n'
        }
      }
    },

    uglify: {
      options: {
        output: {
          comments: "/^\/*!/"
        }
      },
      build: {
        files: {
          'dist/outsystems-humanizer.min.js': ['dist/outsystems-humanizer.js']
        }
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['browserify', 'uglify']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

};