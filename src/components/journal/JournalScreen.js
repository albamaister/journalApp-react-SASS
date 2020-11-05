import React from 'react';
import { NoteScream } from '../notes/NoteScream';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
    return (
        <div className='journal__main-content'>
            <Sidebar/>
            <main>
                {/* <NothingSelected/> */}
                <NoteScream/>
            </main>
        </div>
    )
}
