import {createSlice} from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'note',
    initialState:{
        note:''
    },
    reducers:{
        createNotes: (state, action) => {
            // state.notes = [...state.notes,  action.payload];
            state.note.push(action.payload);
        },
        deleteNotes:(state,action) => {
        
        }
    }
}
)

export default notesSlice;
export const {createNotes,deleteNotes} = notesSlice.actions;