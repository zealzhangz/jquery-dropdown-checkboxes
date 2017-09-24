module.exports = function (grunt) {


    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("dropdowncheckboxes.jquery.json"),

        // Banner definitions
        meta: {
            banner: "/*\n" +
            " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
            " *  <%= pkg.description %>\n" +
            " *  <%= pkg.homepage %>\n" +
            " *\n" +
            " *  Made by <%= pkg.author.name %>/<%= pkg.author.email %>\n" +
            " *  Under <%= pkg.licenses[0].type %> License\n" +
            " */\n"
        },

        // Concat definitions
        concat: {
            dist: {
                src: ["src/jquery.dropdowncheckboxes.js"],
                dest: "dist/jquery.dropdowncheckboxes.js"
            },
            css: {
                src: ["src/jquery.dropdowncheckboxes.css"],
                dest: "dist/jquery.dropdowncheckboxes.css"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // Lint definitions
        jshint: {
            files: ["src/jquery.dropdowncheckboxes.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Minify definitions
        uglify: {
            my_target: {
                src: ["dist/jquery.dropdowncheckboxes.js"],
                dest: "dist/jquery.dropdowncheckboxes.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },
        //
        cssmin: {
            css: {
                src: ['src/jquery.dropdowncheckboxes.css'],
                dest: 'dist/jquery.dropdowncheckboxes.min.css'
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        }

    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);

};
