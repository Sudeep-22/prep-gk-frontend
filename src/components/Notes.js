import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  let Navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getAllNotes, updateNotes } = context;
  const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "default" })
  const handleClick = (e) => {
    updateNotes(note.id,note.etitle,note.edescription)
    refClose.current.click();
    // addNotes(note.etitle, note.edescription, note.etag);
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      getAllNotes();
    }
    else{
      console.log("Reached the else statement");
      Navigate("/login");
    }
  }, [Navigate,notes,getAllNotes]);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();    
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.content})
  };
  return (
    <>
      <AddNotes setAlert={props.setAlert} />
      {/* <!-- Button trigger modal --> */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="Text" className="form-control" id="etitle" name="etitle" onChange={onChange} value={note.etitle} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="Text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary"  onClick={handleClick}>Update note</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div className="container">
        <div className="row my-3">
          <h2>Your notes</h2>
          {notes.length === 0 && <p>No notes to display</p>}
          {notes.map((note) => {
            return (
              <NoteItem setAlert={props.setAlert} key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
