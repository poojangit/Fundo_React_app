import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBarMui from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import { Avatar, Button, Grid } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { setFalse, setInputData, setTrue } from '../../Redux/Action';
import { Spinner } from '../NotesCompo/Spinner';
import '../NoteBox/NoteBox.scss'
import './NavBar.scss';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';


const Search = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '45%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(-2)})`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function CustomNavBar({ handleDrawerOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const storedJsonString = localStorage.getItem('userData');

  // Parse the JSON string back into an object
  const storedData = storedJsonString ? JSON.parse(storedJsonString) : null;
  const name = storedData ? storedData.username : '';
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';
  console.log(firstLetter)

  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',

      }}
      style={{ marginTop: '50px' }}
      className='profileModal'
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}

      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <p className='modalClose' onClick={handleMenuClose}><CloseIcon /></p>
      <div className='userModal' >
        <div className='modal_item' >
          {storedData ? storedData.email : ''}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar style={{ width: '70px', height: '70px', fontSize: '50px' }}>{firstLetter}</Avatar>
          <h3> Hi!</h3>
        </div>
        <div className='acc_manage'>
          <Button>Manage your google account </Button>
        </div>
        <div className='modal_btn' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='modal_btn_1'>
            <MenuItem onClick={logOut} > <AddIcon />Add Account</MenuItem>
          </div>
          <div className='modal_btn_2'>
            <MenuItem onClick={logOut}> <LogoutIcon />Sign Out</MenuItem>
          </div>

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button style={{ color: 'grey', fontSize: '10px' }}>Privacy Policy</Button> -<Button style={{ color: 'grey', fontSize: '10px' }}>Terms of service</Button>
        </div>
      </div>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const refrecePage = () => {
    window.location.reload();
  }
  const dispatch = useDispatch();

  // ^useSelecter hook---------------

  const isTrue = useSelector(state => state.isTrue);
  const initialSearchValue = useSelector(state => state.inputData)
  const loading = useSelector(state => state.isLoading)
  const titleNotes = useSelector(state => state.title)
  console.log(titleNotes);
  console.log(loading);

  const changeView = () => {
    // Dispatch the appropriate action based on the current state
    if (isTrue) {
      dispatch(setFalse());
    } else {
      dispatch(setTrue());
    }
    // Store the initial state before the action is dispatched
  }

  const [inputSearch, setInputSearch] = useState(initialSearchValue)
  const hangleSearch = (e) => {
    setInputSearch(e.target.value)
    dispatch(setInputData(inputSearch));
  }
  return (
    <Box sx={{ flexGrow: 1, width: "100%", position: "fixed" }} >
      <AppBarMui position="static" sx={{ backgroundColor: 'white', borderBottom: '1px solid grey', boxShadow: "none", height: "70px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={handleDrawerOpen} />
          </IconButton>
          <div>
            <img src="https://up.yimg.com/ib/th?id=OIP.hcr2l0kSdi7HLWWsgKkaOQAAAA&%3Bpid=Api&rs=1&c=1&qlt=95&w=78&h=107" alt="" height={'40px'} />
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' }, color: 'black', marginLeft: '20px' }}
          >
            {titleNotes}
          </Typography>

          <Search className='navSerach_bar' style={{ color: 'black', width: "50%", height: '50px', borderRadius: "10px", backgroundColor: "#ecf0f2" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              color='black'
              onChange={hangleSearch}
              name='searchValue'
              value={inputSearch}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex', marginRight: "10px" } }}>
            <IconButton
              size="large"
              style={{ marginRight: "10px" }}
            >
              <Badge>
                {loading ? <Spinner /> : <RefreshOutlinedIcon style={{ fontSize: "25px", }} onClick={refrecePage} />}
              </Badge>
            </IconButton>

            <IconButton size="large">
              <Badge  >
                {isTrue ? <GridViewOutlinedIcon style={{ fontSize: "25px", }} onClick={changeView} /> : <ViewAgendaOutlinedIcon style={{ fontSize: "25px", }} onClick={changeView} />}
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              style={{ marginRight: "25px" }}
            >
              <Badge>
                <SettingsOutlinedIcon style={{ fontSize: "25px", }} />
              </Badge>
            </IconButton>

            <IconButton size="large">
              <Badge  >
                <AppsSharpIcon style={{ fontSize: "25px", }} />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              width="50px"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Avatar sizes='20px' style={{ fontSize: "15px", width: '25px', height: '25px' }} >
                {/* {firstLetter} */}
              </Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarMui>
      {renderMobileMenu}
      {renderMenu}
      <Grid >
        {/* <DrawerBar openModal={open} handleDrawerOpen={handleDrawerHoverOpne} handleModalHoverClose={handleModalHoverClose}/> */}
      </Grid>
    </Box>
  );
}
