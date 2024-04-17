// Se importa useState y useEffect desde React para agregar estado y efectos a los componentes de función
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Componentes/Header/Header";
import NoteList from "./Componentes/NoteList/NoteList";
import NoteField from "./Componentes/NoteField/NoteField";

const baseUrl = 'http://localhost:3001/api/notes';

const App = () => {
  // useState es un hook que te permite agregar estado a los componentes de función
  // Creamos una variable de estado llamada 'notes' y una función 'setNotes' para actualizarla
  const [notes, setNotes] = useState([]);

  // useEffect es un hook que te permite realizar efectos secundarios en componentes funcionales
  // Utilizamos useEffect para cargar las notas desde la API cuando el componente se monta
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