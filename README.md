tmplconv
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/okunishinishi/node-tmplconv
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-tmplconv
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-tmplconv.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-tmplconv/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-tmplconv
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-tmplconv.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-tmplconv.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-tmplconv
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-tmplconv.svg
[bd_npm_url]: http://www.npmjs.org/package/tmplconv
[bd_npm_shield_url]: http://img.shields.io/npm/v/tmplconv.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Two way template converter.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


**my_awesome_func.js**
```
function myAwesomeFunc () {
  /* ... */
}
```

&nbsp;&nbsp;   &darr;&darr;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &uarr;&uarr;

Tmplify  &nbsp;&nbsp;  Render

&nbsp;&nbsp;   &darr;&darr;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &uarr;&uarr;

**____name<span></span>@snakecase____.js.tmpl**

```
function ____name@camelcase____ () {
  /* ... */
}
```


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
npm install tmplconv --save-dev
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Render.md.hbs" Start -->

<a name="section-doc-guides-02-render-md"></a>
Render Files from Template
---------

```javascript
'use strict'

const tmplconv = require('tmplconv')

// Render files from existing template
tmplconv.render('asset/app-tmpl', 'demo/demo-app', {
  // Data to render
  data: {
    'name': 'my-awesome-app',
    'description': "This is an example for the app templates."
  }
}).then((result) => {
  /* ... */
})

```

##### Render Options

| Key | Default | Description |
| --- | --- | --- |
| data |  | Name or path of data module. |
| pattern | '**/*.*' | File name patterns |
| ignore |  | File name patterns to ignore |
| prefix | '_____' | Embed prefix |
| suffix | '_____' | Embed suffix |
| extname | '.tmpl' | Embed Template extension name |
| silent |  | Disable console logs |
| clean |  | Cleanup destination directory before convert |
| once |  | Write only first time. Skip if already exists |
| mode | '644' | File permission to generate |



<!-- Section from "doc/guides/02.Render.md.hbs" End -->

<!-- Section from "doc/guides/03.Templify.md.hbs" Start -->

<a name="section-doc-guides-03-templify-md"></a>
Generate Template from Existing Files
---------

```javascript
'use strict'

const tmplconv = require('tmplconv')

// Generate template from existing directory
tmplconv.tmplify('demo/demo-app', 'asset/app-tmpl', {
  // Patterns of files to tmplify
  pattern: [
    'lib/*.js',
    'test/*_test.js'
  ],
  // Rule to tmplify
  data: {
    'name': 'my-awesome-app',
    'description': "This is an example for the app templates."
  }
}).then((result) => {
  /* ... */
})

```

##### Tmplify options
| Key | Default | Description |
| --- | --- | --- |
| data |  | Name or path of data module. |
| pattern | '**/*.*' | File name patterns |
| ignore |  | File name patterns to ignore |
| prefix | '_____' | Embed prefix |
| suffix | '_____' | Embed suffix |
| extname | '.tmpl' | Embed Template extension name |
| silent |  | Disable console logs |
| clean |  | Cleanup destination directory before convert |
| once |  | Write only first time. Skip if already exists |
| mode | '644' | File permission to generate |


<!-- Section from "doc/guides/03.Templify.md.hbs" End -->

<!-- Section from "doc/guides/04.Conversion.md.hbs" Start -->

<a name="section-doc-guides-04-conversion-md"></a>
#### String Conversion


You can use these functions to convert text before it is inserted into a template:

* __camelcase:__ "hello world" --> "HelloWorld"
* __pascalcase:__ "hello world" --> "helloWorld"
* __spinalcase:__ "hello world" --> "hello-world"
* __snakecase:__ "hello world" --> "hello_world"
* __uppercase:__ "hello world" --> "HELLO WORLD"
* __lowercase:__ "hello world" --> "hello world"
* __enumcase:__ "hello world" --> "hello:world"


<!-- Section from "doc/guides/04.Conversion.md.hbs" End -->

<!-- Section from "doc/guides/05.CLI.md.hbs" Start -->

<a name="section-doc-guides-05-c-l-i-md"></a>
Using with CLI
---------

Install as a global module.

```bash
$ npm install tmplconv -g
```

#### CLI Usage:

```bash
$ tmplconv -h

  Usage: tmplconv [options] [command]


  Commands:

    tmplify [options] <srcDir> <destDir>  Generate a template from existing files
    render [options] <srcDir> <destDir> 
    transplant [options] <src> <dest>     Tmplify and render at once

  Two way template converter.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number


```

<!-- Section from "doc/guides/05.CLI.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-tmplconv/blob/master/LICENSE).

<!-- LICENSE End -->


