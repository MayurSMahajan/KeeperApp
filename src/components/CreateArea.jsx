import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsChecked(false);
    event.preventDefault();
  }

  const [isChecked, setIsChecked] = useState(false);
  function handleClick(){
    setIsChecked(true);
  }

  return (
    <div>
      <form className="create-note">
       
       {isChecked &&  
       <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={handleClick}
          placeholder="Take a note..."
          rows={isChecked ? "3" : "1"}
        
        />
        <Zoom in={isChecked}>
        <button onClick={submitNote} >
        <AddIcon />
        </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
