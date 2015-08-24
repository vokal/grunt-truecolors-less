# grunt-truecolors-less

> Grunt for TrueColors-LESS

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install https://github.com/vokal/grunt-truecolors-less.git --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-truecolors-less');
```

## The "truecolors_less" task

### Overview
In your project's Gruntfile, add a section named `truecolors_less` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  truecolors_less: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

_None Currently_

### Usage Examples

#### Default Options
In this example, the truecolors file is converted to a LESS document.

```js
grunt.initConfig({
  truecolors_less: {
    files: {
      'dest/default_options.less': ['src/testing.truecolors'],
    }
  }
});
```

## Contributing
Follow the standards set by `.jshintrc` and `.jscsrc`. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- v1.0.0 08-24-2015
