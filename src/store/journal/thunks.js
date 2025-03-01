import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving } from './journalSlice';
import { loadNotes } from '../../helpers/loadNotes';

export const startNewNote = () => {
  
    return async(dispatch, getState ) => {

        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`) );
        await setDoc(  newDoc, newNote  );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ));
        dispatch( setActiveNote( newNote ));
        // dispatch
    }
}


export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El UID del usuario no existe');

       const notes =  await loadNotes( uid );

       dispatch(setNotes(notes) );

    }
}

import React from 'react'

export const startSaveNote = () => {
  
    return async( dispatch, getState ) => {


        dispatch(setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        // console.log(noteToFirestore);
        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${note.id}`);

        await setDoc(docRef, noteToFirestore, { merge: true });
    }
}


