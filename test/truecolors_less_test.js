"use strict";

var grunt = require( "grunt" );

exports.truecolors_less = {
    setUp: function ( done )
    {
        // setup here if necessary
        done();
    },
    default_options: function ( test )
    {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/default_options.less" ) + "\n";
        var expected = grunt.file.read( "test/expected/default_options.less" );

        test.equal( actual, expected, "should write LESS docuement." );

        test.done();
    }
};
