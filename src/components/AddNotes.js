import React,{useState, useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';

const AddNotes = (props) => {
    const context = useContext(NoteContext)
    const {addNotes} = context;
    const [note, setNote] = useState({title: "",description: "", tag: "default"})
    const handleClick=(e) =>{
        e.preventDefault();
        addNotes(note.title, note.description, note.tag);
        props.setAlert("success","Note added Successful")
        setNote({title: "",description: "", tag: "default"})
    }
    const onChange= (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
      <h2>Add your note</h2>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="Text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
  </div>
  <button disabled={note.title.length < 3|| note.description.length < 8} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
    </div>
  )
}

export default AddNotes
