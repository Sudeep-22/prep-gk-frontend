import React,{useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const {updateNote,note} = props
    const context = useContext(NoteContext)
    const {deleteNote} = context;
    let Htag = note.tag.charAt(0).toUpperCase() + note.tag.slice(1);
  return (
    <div className='col-md-3 my-3 '>
  <div className="card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{note.title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{Htag}</h6>
      
      {/* Truncated Note Content */}
      <p className="card-text">
        {note.content}
      </p>

      {/* Push icons to the bottom */}
      <div className="mt-auto d-flex justify-content-end">
        <i className="fa-solid fa-trash mx-4" style={{ cursor: "pointer" }} 
           onClick={() => { deleteNote(note._id); props.setAlert("danger", "Note deleted successfully"); }}/>
        <i className="fa-regular fa-pen-to-square" style={{ cursor: "pointer" }} 
           onClick={() => { updateNote(note) }}/>
      </div>
    </div>
  </div>
</div>
  )
}

export default NoteItem
