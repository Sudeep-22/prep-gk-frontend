import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
  const[notes,setNotes] = useState([])
    const host = "https://prep-gk-backend.onrender.com"
    // const host = "http://localhost:5000"
    const getAllNotes = async() =>{
      const response = await fetch(`${host}/api/notes/fetchNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth_token": localStorage.getItem('token')
        }
      });
      const json=await response.json()
      setNotes(json)
    }

    const addNotes = async(title,content,tag) =>{
      await fetch(`${host}/api/notes/addNotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth_token": localStorage.getItem('token')
        },
        body: JSON.stringify({title,content,tag})
      });
      // const note={
      //   "_id": "64d0c7bf4f8598b3a7c8d0147",
      //   "user": "64b96f4666926c27560bb38e",
      //   "title": title,
      //   "content": content,
      //   "tag": tag,
      //   "date": "2023-08-07T10:30:23.143Z",
      //   "__v": 0
      // }
      // setNotes(notes.concat(note))
     }
    const deleteNote = async(id) =>{
     await fetch(`${host}/api/notes/deleteNotes/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth_token": localStorage.getItem('token')
          }
        });
    }
    const updateNotes = async(id,title,content) => {
  await fetch(`${host}/api/notes/updateNotes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth_token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,content}),
        });
    }
    return(
    <NoteContext.Provider value={{notes,setNotes,addNotes,deleteNote,updateNotes,getAllNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
}
export default NoteState;