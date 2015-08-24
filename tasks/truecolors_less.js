/*
 * grunt-truecolors-less
 * https://github.com/Jarrett/grunt-truecolors-less
 *
 * Copyright (c) 2015 Vokal
 * Licensed under the MIT license.
 */

"use strict";

var colors = require( "truecolors-less" );

module.exports = function ( grunt )
{
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask( "truecolors_less", "Grunt for TrueColors-LESS", function ()
    {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({});

        // Iterate over all specified file groups.
        this.files.forEach( function ( f )
        {
            var src = f.src.filter( function ( filepath )
            {
                // Warn on and remove invalid source files (if nonull was set).
                if( !grunt.file.exists( filepath ))
                {
                    grunt.log.warn( 'Source file "' + filepath + '" not found.' );
                    return false;
                }
                else
                {
                    return true;
                }
            });

            src.forEach( function ( assetPath )
            {
                colors.translatePath( assetPath, function ( err, result )
                {
                    grunt.file.write( f.dest, result );
                    grunt.log.writeln( 'File "' + f.dest + '" created.' );
                });
            });
        });
    });
};
