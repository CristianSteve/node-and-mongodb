//Rutas del endpoint  notes
const notesCtrll = {};
const Note = require('../models/Note');                    //Accede al modelo de datos de Notes

notesCtrll.renderNoteForm = (req, res) =>{
    res.render('notes/newNote');
};

notesCtrll.createNewNote = async (req, res) =>{
    const { title, description } = req.body;               //Guarda el cuerpo del request
    const newNote = new Note({title, description});        //Crea un nuevo objeto del tipo de modelo Notes
    await newNote.save();                                  //Guardar manera asincrona
    req.flash('success_msg','Note add Succesfully');       //Envia notificacion vista
    res.redirect('/notes');
};

notesCtrll.renderNotes = async (req, res) =>{
    const notes = await Note.find().lean();
    res.render('notes/allNotes', {notes});
};

notesCtrll.renderEditForm = async (req, res) =>{
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

module.exports = notesCtrll;