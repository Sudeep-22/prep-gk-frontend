import { useState, useCallback } from "react";
import NoteContext from "./NoteContext";

const host = "https://prep-gk-backend.onrender.com"
// const host = "http://localhost:5000"

const NoteState = (props) =>{
  const[notes,setNotes] = useState([])

  const getAllNotes = useCallback(async() =>{
    try {
      const response = await fetch(`${host}/api/notes/fetchNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth_token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  },[]);

  // Add a new note and update state
  const addNotes = async (title, content) => {
    try {
      const response = await fetch(`${host}/api/notes/addNotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth_token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, content }),
      });
      const json1 = await response.json();
      console.error(JSON.stringify(json1));
      getAllNotes();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a note and update state
  const deleteNotes = async (id) => {
    try {
      await fetch(`${host}/api/notes/deleteNotes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth_token": localStorage.getItem("token"),
        },
      });
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Update a note
  const updateNotes = async (id, title, content) => {
    try {
      const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth_token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, content }),
      });
      const json1 = await response.json();
      console.error(JSON.stringify(json1));
      getAllNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

    return(
    <NoteContext.Provider value={{notes,setNotes,addNotes,deleteNotes,updateNotes,getAllNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
}
export default NoteState;