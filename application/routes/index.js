module.exports = (app) => {
    const WelcomeController = require('../controllers/WelcomeController.js');

    app.get('/', WelcomeController.welcome);
    app.get('/login', WelcomeController.login);
}