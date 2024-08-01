import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import './TechNoteOne.scss';
import { useState } from 'react';
import TechNoteTwo from '../Technote2/TechNoteTwo';


function TechNoteOne() {

    const [showTechNoteTwo, setTechNoteTwo] = useState(false)

    const takeNoteHandler = () => {
        setTechNoteTwo(true)
    }

    return (
        <div>
            {showTechNoteTwo ? (<TechNoteTwo/> ):(
            <div className="main-note-cnt" onClick={takeNoteHandler} >
                <div className="main-note-inner-cnt">
                    <div>
                        <span>Take a note...</span>
                    </div>
                    <div className='main-note-opt'>
                        <div className='main-note-icon'>
                            <CheckBoxOutlinedIcon />
                        </div>
                        <div className='main-note-icon'>
                            <CreateOutlinedIcon />
                        </div>
                        <div className='main-note-icon'>
                            <InsertPhotoOutlinedIcon />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default TechNoteOne;