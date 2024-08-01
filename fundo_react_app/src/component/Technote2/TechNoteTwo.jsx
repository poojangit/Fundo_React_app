import React, {useRef, useEffect} from 'react';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';

import './TechNoteTwo.scss'


function TechNoteTwo() {
    const inputRef = useRef(null)

    useEffect(()=> {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    })
    return (
        <div className='inner-note-cnt'>

            <div className='inner-title-note-cnt'>
                <input className='inner-title-input-cnt' type='text' placeholder='Title' ></input>
                <PushPinOutlinedIcon />
            </div>
            <div className='inner-take-note-cnt'>
                <input className='inner-takenote-input-cnt' type='text' placeholder='Take a note...' ref={inputRef}></input>
            </div>
            <div className='inner-note-icons-cnt'>
                <div className='inner-icons'>
                <AddAlertOutlinedIcon/>
                <PersonAddAltOutlinedIcon/>
                <PaletteOutlinedIcon/>
                <InsertPhotoOutlinedIcon/>
                <ArchiveOutlinedIcon/>
                <MoreVertOutlinedIcon/>
                <UndoOutlinedIcon/>
                <RedoOutlinedIcon/>
                </div>
                <div className='inner-note-close-btn'>
                    <Button className='close-btn'>Close</Button> 
                </div>
            </div>


        </div>
    );
}

export default TechNoteTwo;
