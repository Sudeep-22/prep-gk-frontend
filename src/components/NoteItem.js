import React,{useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = ({ updateNote, note, setAlert }) => {
    const {deleteNotes} = useContext(NoteContext)
  return (
    <div className='col-md-3 my-3 '>
  <div className="card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{note.title}</h5>
      
      {/* Truncated Note Content */}
      <p className="card-text">
        {note.content}
      </p>

      {/* Push icons to the bottom */}
      <div className="mt-auto d-flex justify-content-end">
        <i className="fa-solid fa-trash mx-4" style={{ cursor: "pointer" }} 
           onClick={() => { deleteNotes(note._id); setAlert("danger", "Note deleted successfully",2000); }}/>
        <i className="fa-regular fa-pen-to-square" style={{ cursor: "pointer" }} 
           onClick={() => { updateNote(note) }}/>
      </div>
    </div>
  </div>
</div>
  )
}

export default NoteItem
