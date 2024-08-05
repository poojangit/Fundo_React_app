
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { Grid } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import './NoteBox.scss'
import { useState } from 'react';
import { SearchInput2 } from './NoteBox2.jsx';
import { postNotes } from '../../services/AllNotesServices.jsx';
import { useDispatch } from 'react-redux';
import { setIsComponentRender } from '../../Redux/Action.jsx';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const NoteBoxOne = () => {
    const [changeInput, setChangeInput] = useState(true)
    const dispatch = useDispatch();
    const handleInput = () => {    
        setChangeInput(false)
    }
    const handleInputClose= async (notesData)=>{
       
        if(notesData.title !== '' || notesData.description !==''){
            console.log(notesData.title )
          let data= await  postNotes(notesData)
          setChangeInput(true)
          dispatch(setIsComponentRender(prev=>!prev))
        //   window.location.reload();
        }else{
            setChangeInput(true)
        }   
    }
    return (
        <div>
            {changeInput ?
                <Grid sx={12} lg={8} xl={10}  className='serachInputOne_Parenet'>
                    <Box>
                        <Search className='seracheInput_first' style={{
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px ', color: 'black', width: "600px", height: '50px', borderRadius: "10px", display: "flex", marginLeft:'85px',
                            justifyContent: 'space-between', textAlign: "center"
                        }}  >

                            <StyledInputBase
                                placeholder="Take a note"
                                inputProps={{ 'aria-label': 'search' }}
                                color='black'
                                onClick={handleInput}
                            />
                            <div className='searhInout1-parent'>
                                <div className='srarchInput1-icon'><CheckBoxOutlinedIcon /></div>
                                <div className='srarchInput1-icon'><BrushOutlinedIcon /></div>
                                <div className='srarchInput1-icon'><ImageOutlinedIcon /></div>
                            </div>
                        </Search>
                    </Box>
                </Grid>
                : <SearchInput2 handleInputClose={handleInputClose} />}
        </div>
    )
}