//Rutas del menu principal
const indexCtrll = {};

indexCtrll.renderIndex = (req, res) =>{
    let nameUsr = {};
    nameUsr = req.user ? nameUsr.name : null;
    res.render('index',{nameUsr});
};

indexCtrll.renderAbout = (req, res) =>{
    res.render('about');
};

module.exports = indexCtrll;