const notesCtrll = {};

notesCtrll.renderNoteForm = (req, res) =>{
    res.send('render note');
};

notesCtrll.createNewNote = (req, res) =>{
    res.send('add new note');
};

notesCtrll.renderNotes = (req, res) =>{
    res.send('renders notes');
};

notesCtrll.renderEditForm = (req, res) =>{
    res.send('form edit notes');
};

notesCtrll.updateNotes = (req, res) =>{
    res.send('edit notes');
};

notesCtrll.deleteNotes = (req, res) =>{
    res.send('delete notes');
};

module.exports = notesCtrll;