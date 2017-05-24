const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session : false});
const requireSigin = passport.authenticate('local',{session: false});

module.exports = function(app){
    //console.log(app);
    app.get('/', requireAuth, function (req, res) {
        res.send({ "message": "hello world" });
    });
    
    app.post('/signin',requireSigin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}