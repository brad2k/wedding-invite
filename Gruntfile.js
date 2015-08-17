module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          loadPath: [
            'app/public/css',
            'app/bower_components/bourbon/app/assets/stylesheets',
            'app/bower_components/neat/app/assets/stylesheets'
          ]
        },
        files: {                         // Dictionary of files
          'app/public/css/main.css': 'app/public/css/main.scss'       // 'destination': 'source'
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "public/js",
          mainConfigFile: "path/to/config.js",
          name: "path/to/almond", // assumes a production build using almond
          out: "path/to/optimized.js"
        }
      }
    },
    watch: {
      css: {
        files: ['app/public/css/*.scss', 'app/public/css/core/*.scss'],
        tasks: ['sass']
      }
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'app/public/js/vendor'
        },
        files: {
          'jquery/jquery.js': 'jquery/dist/jquery.js'
        }
      },
      css: {
        options: {
          destPrefix: 'app/public/css/vendor'
        },
        files: {
          'normalize/normalize.css': 'normalize.css/normalize.css'
        }
      }
    }
  });

  // Load the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bowercopy');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};