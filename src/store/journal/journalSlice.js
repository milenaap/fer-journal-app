import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
       isSaving: false,
       messageSaved: '',
       notes: [],
       active: null,
        // active: {
        //     id:'ABC123',
        //     title:'',
        //     body: '',
        //     date: 1234567,
        //     imageURLs: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving =  true;
        },

        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            // TODO: mensaje de error...
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ){
                    return action.payload;
                }
                return note;
            });
        },
        deleteNodeById: (state, action) => {

        },
        

        // increment: (state, /* action */ ) => {
        //     state.counter += 1;
        // },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNodeById,
    savingNewNote, 
} = journalSlice.actions;