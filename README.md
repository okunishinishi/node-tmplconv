tmplconv
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

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
[bd_bower_badge_url]: https://img.shields.io/bower/v/tmplconv.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Two way template converter.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install tmplconv --save-dev
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

### Render Example

```javascript
var tmplconv = require('tmplconv');

tmplconv.tmplify('asset/app-tmpl', 'demo/demo-app', {
    data: {
        'name': 'my-awesome-app',
        'description': "This is an example for the app templates."
    }
}, function (err) {
    /*...*/
});

```

### Render Options

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



### Tmplify Example

```javascript
var tmplconv = require('tmplconv');

tmplconv.tmplify('demo/demo-app', 'asset/app-tmpl', {
    pattern: [
        'lib/*.js',
        'test/*_test.js'
    ],
    data: {
        'name': 'my-awesome-app',
        'description': "This is an example for the app templates."
    }
}, function (err) {
    /*...*/
});

```

### Tmplify options
| Key | Default | Description |
| --- | --- | --- |

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/04.CLI.md.hbs" Start -->

<a name="section-doc-readme-04-c-l-i-md"></a>
Using with CLI
---------

Install as a global module.

```bash
$ npm install tmplconv -g
```

Then,

```bash
$ tmplconv
```
<!-- Section from "doc/readme/04.CLI.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-tmplconv/blob/master/LICENSE).

<!-- LICENSE End -->


