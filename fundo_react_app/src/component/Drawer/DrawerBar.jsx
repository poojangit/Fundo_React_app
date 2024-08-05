import * as React from 'react';

import { useDispatch } from 'react-redux';
import { setArchiveTitle, setNotesTitle, setReminderTitle, setTrashTitle , setEditTitle} from '../../Redux/Action';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomNavBar from '../NavBar/NavBar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './Drawer.scss'
import { useState } from 'react';

const drawerWidth = 240;

//^opening the drawer
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// ^closing the drawer
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DrawerBar() {

  const [open, setOpen] = React.useState(false);
  const [activeLinkArchive, setActiveLinkArchive] = useState('');
  const [activeLinkTrash, setActiveLinkTrash] = useState('');
  const [activeLinkHome, setActiveLinkHome] = useState('');
  const [activeLinkRemind, setActiveLinkRemind] = useState('')
  const [activeLinkEdit, setActiveLinkEdit] = useState('')
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerHoverOpne = () => {
    setOpen(true)
  };
  const handleModalHoverClose = () => {
    setOpen(false)
  }
  const dispatch = useDispatch();
  const archiveRoute = () => {
    navigate('/archive', { state: { widthValue: drawerWidth } })
    console.log(drawerWidth)
    setActiveLinkArchive('activeStyle')
    setActiveLinkHome('')
    setActiveLinkTrash('')
    dispatch(setArchiveTitle())
    setActiveLinkRemind('')
  }
  const notesRoute = () => {
    navigate('/', { state: { widthValue: drawerWidth } })
    setActiveLinkArchive('')
    setActiveLinkHome('activeStyle')
    setActiveLinkTrash('')
    dispatch(setNotesTitle())
    setActiveLinkRemind('')
  }

  const trashRoute = () => {
    navigate('/trash')
    setActiveLinkArchive('')
    setActiveLinkHome('')
    setActiveLinkTrash('activeStyle')
    dispatch(setTrashTitle())
    setActiveLinkRemind('')
  }
  const handleReminder = () => {
    navigate('/reminder')
    setActiveLinkArchive('')
    setActiveLinkTrash('')
    setActiveLinkHome('')
    dispatch(setReminderTitle())
    setActiveLinkRemind('activeStyle')
  }

  const handleEdit = () => {
    dispatch(setEditTitle())
    navigate('/edit')
    setActiveLinkArchive('')
    setActiveLinkTrash('')
    setActiveLinkHome('')
    setActiveLinkEdit('activeStyle')
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomNavBar handleDrawerOpen={handleDrawerOpen} />
      <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerHoverOpne} onMouseLeave={handleModalHoverClose}>
        <List>
          <ListItem disablePadding className={activeLinkHome} sx={{ display: 'block', borderRadius: '20px', width: '100%' }}>
            <ListItemButton
              sx={{
                minHeight: 50,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              className='listItem-button-drawer'
              onClick={notesRoute}
            >
              <LightbulbOutlinedIcon
                sx={{
                  minWidth: 40,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </LightbulbOutlinedIcon>
              <ListItemText primary={'Notes'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block', borderRadius: '20px' }} className={activeLinkRemind}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={handleReminder}
              className='listItem-button-drawer'
            >
              <NotificationsNoneOutlinedIcon
                sx={{
                  minWidth: 30,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </NotificationsNoneOutlinedIcon>
              <ListItemText primary={'Reminder'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block', borderRadius: '20px' }}className={activeLinkEdit}>
            <ListItemButton sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
              onClick={handleEdit}>
              <EditOutlinedIcon sx={{
                minWidth: 30,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }} />
              <ListItemText primary={'Edit'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className={activeLinkArchive} sx={{ display: 'block', borderRadius: '20px' }} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={archiveRoute}
              className='listItem-button-drawer'
            >
              <ArchiveOutlined
                sx={{
                  minWidth: 30,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ArchiveOutlined>
              <ListItemText primary={'Archive'} sx={{ opacity: open ? 1 : 0, }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block', borderRadius: '20px' }} className={activeLinkTrash}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              className='listItem-button-drawer'
              onClick={trashRoute}
            >
              <DeleteOutlineOutlinedIcon
                sx={{
                  minWidth: 30,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </DeleteOutlineOutlinedIcon>
              <ListItemText primary={'Bin'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}