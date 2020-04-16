//Rutas del menu principal
const userCtrll = {};
const Note = require('../models/User');

userCtrll.renderSignUpForm = (req, res) =>{
    res.render('users/signup');
};

userCtrll.signUp = (req, res) =>{
    res.send('signup');
};

userCtrll.renderSignInForm = (req, res) =>{
    res.render('users/signin');
};

userCtrll.signIn = (req, res) =>{
    res.send('signin');
};

userCtrll.logOut = (req, res) =>{
    res.send('logout');
};
 
module.exports = userCtrll;