const { Router } = require('express');
const router = Router();


const { 
        renderNoteForm, createNewNote, renderNotes,
        renderEditForm, updateNotes, deleteNotes 
      } = require('../controllers/notes.controller.js');   //Rutas de los controladores

router.get('/notes/add', renderNoteForm);                  //New note
router.post('/notes/add', createNewNote);                  //Create Notes
router.get('/notes', renderNotes);                         //Get list notes
router.get('/notes/edit/:id', renderEditForm);             //Form edit notes
router.put('/notes/edit/:id', updateNotes);                //Update notes
router.delete('/notes/delete/:id', deleteNotes);           //Update notes



module.exports = router;