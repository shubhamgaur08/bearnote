import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "./AddNote.css";
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3 w-75 rounded-pill" >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control " id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label  ">Description</label>
                    <textarea type="text" rows="3" className="description form-control  " id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control " id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                {/* <button  className="btn btn-primary" >Add Note</button> */}
                <div className="d-flex justify-content-left ">
                
                
                <Button disabled={note.title.length<5 || note.description.length<5} onClick={handleClick} className="rounded-pill border border-info" type="submit" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Add Note</Button>
            </div>

            </form>
        </div>
    )
}

export default AddNote
