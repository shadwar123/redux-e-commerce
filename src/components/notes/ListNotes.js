import React from 'react';
import {  useSelector } from 'react-redux';
// import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';

function ListNotes() {
    const notes = useSelector((state) =>  state.notesReducer.notes);
  if(notes===undefined) {return}
  return (
    <div>
       <p>listnote : {notes}</p>
        {notes.map(note => {
            return <div>
                
            <p>{notes.id}</p>
            <h2> {notes.title} </h2>
            <p> {notes.desc} </p>
            
        </div>
                
            
        })}
    </div>
  )
}

export default ListNotes;