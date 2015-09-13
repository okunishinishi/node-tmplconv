var tmplconv = require('tmplconv');

tmplconv.render('asset/app-tmpl', 'demo/demo-app', {
    data: {
        'name': 'my-awesome-app',
        'description': "This is an example for the app templates."
    }
}, function (err) {
    /*...*/
});
