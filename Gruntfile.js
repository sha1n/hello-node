module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['app.js', 'src/isomorphic/**/*.js'],
                tasks: ['browserify']
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
