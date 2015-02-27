module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['app.js', 'src/public/**/*.js']
            }
        },
        browserify: {
            dist: {
                src: ['src/isomorphic/**/*.js'],
                dest: 'src/public/js/bundle.js',
                options: {
                    require: ['underscore']
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify']);

};
