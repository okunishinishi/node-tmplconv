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
