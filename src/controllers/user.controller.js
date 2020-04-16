//Rutas del menu principal
const userCtrll = {};
const passport = require('passport');                                   //Modulo de encryptacion
const Users = require('../models/User');                                //Modelo de datos DB Users

userCtrll.renderSignUpForm = (req, res) =>{                             //Salir de session
    res.render('users/signup');
};

userCtrll.signUp = async (req, res) =>{                                 //Formulario de crear usuario
    const{ name, email, password, confirm_password } = req.body;
    let errors = [];
    if(password != confirm_password){
        errors.push({text: 'Password do not match'});
    }
    if(password.length < 4) {
        errors.push({text: 'Password must be at least 4 characters'});
    }
    if(errors.length > 0){
        res.render('users/signup',{errors, name, email});
    }else{
        const emailUser = await Users.findOne({email: email});
        if(emailUser){
            req.flash('error_msg','The email is already in use.')
            res.redirect('/users/signup');
        }else{
            const newUser = new Users({name, email, password});
            newUser.password = await newUser.encrypPassword(password);  //Encyptacion del password
            await newUser.save();                                       //Guarda usuario en DB
            req.flash('success_msg', 'Created');                        //Mensaje a la vista
            res.redirect('/users/signin');                              //Redireccionamiento
        }
    }
};

userCtrll.renderSignInForm = (req, res) =>{
    res.render('users/signin');
};

userCtrll.signIn = passport.authenticate('local', {
    failureRedirect : '/users/signin',
    successRedirect : '/notes',
    failureFlash : true
})

userCtrll.logOut = (req, res) =>{
    res.send('logout');
};
 
module.exports = userCtrll;