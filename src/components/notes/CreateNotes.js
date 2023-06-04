import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function CreateNotes() {
    const [title , setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(CreateNotes({
            title,
            desc,
            id:nanoid(10)
        }))
    }
  return (
    <div>
        <form >
            <input placeholder='title here' onChange={(e) => setTitle(e.target.value)} type="text" />
            <input placeholder='description here' onChange={(e) => setDesc(e.target.value)} type="text" />
            <input  type="submit" onClick={handleSubmit} value="Submit" />
        </form>
        <p>Hello1</p>
    </div>
  )
}

export default CreateNotes