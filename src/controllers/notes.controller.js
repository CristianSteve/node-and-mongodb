//Rutas del endpoint  notes
const notesCtrll = {};
const Note = require('../models/Note');                    //Accede al modelo de datos de Notes

notesCtrll.renderNoteForm = (req, res) =>{
    res.render('notes/newNote');
};

notesCtrll.createNewNote = async (req, res) =>{
    const { title, description, share } = req.body;               //Guarda el cuerpo del request
    const newNote = new Note({title, description, state : '1'});  //Crea un nuevo objeto del tipo de modelo Notes
    if(share) newNote.share.push(share);
    newNote.user = req.user.id;                            //Guardar ID del usuario
    await newNote.save();                                  //Guardar manera asincrona
    req.flash('success_msg','Note add Succesfully');       //Envia notificacion vista
    res.redirect('/notes');
};

notesCtrll.renderNotes = async (req, res) =>{              //Busca todas las notas de la BD
    const notes = await Note.find(
        {$or: 
            [
             {user: req.user.id},
             {share : req.user.email}
            ]
    }).lean();                                             //Transforma objeto JSON legible 
    const nameUsr = req.user.name;                         //Pasa nombre usuario a vista
    res.render('notes/allNotes', {notes, nameUsr});        //Pasa Objeto a la vista
};

notesCtrll.renderEditForm = async (req, res) =>{           //Formulario para editar notas
    const note = await Note.findById(req.params.id).lean();
    res.render('notes/editNotes', {note});
};

notesCtrll.updateNotes = async (req, res) =>{
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description }); 
    req.flash('success_msg','Note update Succesfully');       
    res.redirect('/notes');
};

notesCtrll.deleteNotes = async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id); 
    req.flash('success_msg','Note delete Succesfully');    
    res.redirect('/notes');
};

notesCtrll.renderFindForm = async (req, res) =>{           //Formulario para buscar notas
    res.render('notes/findNotes');
};

notesCtrll.findNotes = async (req, res) =>{
    const { title } = req.query;    
    const notes = await Note.find({
        $or : [
            { $and : 
              [
                {user : req.user.id},
                {title : title}
              ]
            },{
              $and : 
                [
                  {title : title},
                  {share : req.user.email}
                ]
              }
            ]
    }).lean();   
    if(notes.length > 0){
      res.render('notes/allNotes', {notes});                 //Pasa Objeto a la vista
    }else{
      req.flash('error','no find note');  
      res.redirect('/notes/find');
    }
};


module.exports = notesCtrll;