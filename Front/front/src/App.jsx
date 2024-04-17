import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Componentes/Header/Header";
import NoteList from "./Componentes/NoteList/NoteList";
import NoteField from "./Componentes/NoteField/NoteField";

const baseUrl = 'http://localhost:3001/api/notes';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <Header />
      <NoteList notes={notes} /> {}
      <NoteField addNote={addNote} />
    </div>
  );
};

export default App;