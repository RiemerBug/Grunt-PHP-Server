module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        php: {

            dist: {
                options: {
                   bin: "C:\\php\\php-7.1.0-Win32-VC14-x64\\php.exe",
                    port: 50000,
                    //base: '/',
                    //keepalive: true,
                   open: true
                }
            }
        },
        watch:{
            files: ['*.php', '*.html', 'style/*.css', 'js/*.js' ],
            options: {
                livereload: true
            }

        }
    });

    grunt.registerTask('default', ['php', 'watch']);
};