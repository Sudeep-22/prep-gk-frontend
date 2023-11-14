import React,{useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const {updateNote,note} = props
    const context = useContext(NoteContext)
    const {deleteNote} = context;
  return (
    <div className='col-md-3 my-3'>
    <div className="card">
    <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
    <p className="card-text">{note.content}</p>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);props.setAlert("danger","Note deleted successfully");}}/>
    <i className="fa-regular fa-pen-to-square" onClick= {() => {updateNote(note)}}/>
  </div>
  </div>
  </div>
  )
}

export default NoteItem
