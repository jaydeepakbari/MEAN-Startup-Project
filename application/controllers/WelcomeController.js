exports.welcome = async function(req, res) {
    var data = req.body;

    res.render('welcome', { 
        title: 'Welcome',
    })
}

exports.login = async function(req, res) {
    var data = req.body;

    res.render('login', { 
        title: 'login',
    })
}