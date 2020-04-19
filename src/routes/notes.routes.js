const { Router } = require('express');
const router = Router();


const { 
        renderNoteForm, createNewNote, renderNotes, renderFindForm,
        renderEditForm, updateNotes, deleteNotes, findNotes 
      } = require('../controllers/notes.controller.js');             //Rutas de los controladores

const { isAuthenticated } = require('../helpers/auth');              //Metodo para poteger las rutas buscando la session

router.get('/notes/add',isAuthenticated, renderNoteForm);            //New note
router.post('/notes/add', isAuthenticated, createNewNote);           //Create Notes
router.get('/notes', isAuthenticated, renderNotes);                  //Get list notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);      //Form edit notes
router.put('/notes/edit/:id', isAuthenticated, updateNotes);         //Update notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNotes);    //Delete notes
router.get('/notes/find', isAuthenticated, renderFindForm);          //Form Find notes
router.get('/notes/find/notes', isAuthenticated, findNotes);         //Find notes




module.exports = router;