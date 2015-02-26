module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['app.js', 'public/**/*.js']
            }
        },
        browserify: {
            dist: {
                src: ['isomorphic/**/*.js'],
                dest: 'public/js/bundle.js',
                options: {
                    require: ['underscore']
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify']);

};
