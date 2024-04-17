import React, { useState } from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3001/api/notes';

const NoteField = ({ addNote }) => {
    const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),
    };

    axios
      .post(baseUrl, noteObject)
      .then((response) => {
        addNote(response.data);
        setNewNote("");
      });
  };

  return (
    <div style={{ textAlign: "center" }} className="note-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newNote}
          onChange={handleNoteChange}
          placeholder="Enter your note..."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "transparent",
            borderColor: "white",
            borderRadius: "30px",
            width: "70%"
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#d41531",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "20px",
            margin: "10px",
            boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.3)"
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NoteField;