const passport = require('passport');                      //Guardar sesion del usuario
const localStrategy = require('passport-local').Strategy;  //

const Users = require('../models/User');
passport.use(new localStrategy({
    usernameField : 'email',
    passwordField : 'password'
}, async (email, password, done) =>{
    //Math email users
    const user = await Users.findOne({email})
    if(!user){
        return done(null, false, {message : 'no user find'});
    }else{
        const match = user.matchPassword(password);
        if(match)
            return done(null, user);
        else   
            return done(null, false, {message : 'incorrect password'})
    }
}));

passport.serializeUser((user, done)=>{
    done(null, user.id);
})

passport.serializeUser((id, done)=>{
    done(err, user);
})