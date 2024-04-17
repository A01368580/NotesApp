import React from "react";

const NoteList = ({ notes }) => {
    return (
        <div style={{ display: "flex", 
        flexWrap: "wrap", 
        padding: "20px", 
        borderRadius: "8px", 
        marginBottom: "20px" }}>
          <ul style={{ listStyleType: "none", 
          display: "flex", 
          flexWrap: "wrap", 
          padding: "20px", 
          justifyContent: "space-evenly" }}>
            {notes.map((note) => (
              <li key={note.id} style={{ margin: "10px", 
              backgroundColor: "#a8dd67", 
              borderRadius: "3px", 
              padding: "10px", 
              boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.3)", 
              width: "200px", 
              height: "200px", 
              textAlign: "center", 
              alignContent: "center", 
              justifyContent: "space-evenly", 
              fontSize: "25px" }}>
                {note.content} {/* Agregar el contenido de la nota */}
              </li>
            ))}
          </ul>
        </div>
    );
};

export default NoteList;