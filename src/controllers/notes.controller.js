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
    res.redirect('/notes');
};

notesCtrll.renderNotes = async (req, res) =>{
    const notes = await Note.find().lean();
    res.render('notes/allNotes', {notes});
};

notesCtrll.renderEditForm = (req, res) =>{
    res.send('form edit notes');
};

notesCtrll.updateNotes = (req, res) =>{
    res.send('edit notes');
};

notesCtrll.deleteNotes = async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id); 
    res.redirect('/notes');
};

module.exports = notesCtrll;