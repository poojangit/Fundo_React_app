import './NavBar.scss';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import KeepLogo from '../../assets/keep_logo.png'
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

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
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
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

function NavBar({handleDrawer}) {

    return (
        <div className='header-main-cnt'>
            <div className='header-logo-main-cnt'>
                <div className='header-menu-opt-cnt'>
                    <div className='header-menu-cnt' >
                        <IconButton onClick={handleDrawer}><MenuIcon  /></IconButton>
                    </div>
                </div>
                <div className='header-logo-icon-txt-cnt'>
                    <div className='header-logo-cnt'>
                        <img src={KeepLogo} alt="" />
                    </div>
                    <span>Keep</span>
                </div>
            </div>
            <div className='header-serch-main-cnt'>
                <div className='header-serch-logo-cnt'>
                    <div className='header-search-logo-inner-cnt'>
                        <div className='header-search-icon'>
                            <IconButton><SearchIcon /></IconButton>
                        </div>
                        <div className='header-search-inp-cnt'>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            {/* <input type="text" placeholder='Search' id='header-search-inp-value-cnt'  /> */}
                        </div>
                    </div>
                </div>
                <div className='header-search-oth-app-cnt'>
                    <div className='header-opt-same-cnt'>
                        <IconButton><RefreshIcon /></IconButton>
                    </div>
                    <div className='header-opt-same-cnt'>
                        <IconButton>< ViewStreamIcon /></IconButton>
                    </div>
                    <div className='header-opt-same-cnt'>
                        <IconButton>< SettingsIcon /></IconButton>
                    </div>
                </div>
            </div>
            <div className='header-apps-mian-cnt'>
                <div className='header-apps-logo-cnt'>
                    <IconButton><AppsIcon /></IconButton>
                </div>
                <div className='header-profile-logo-cnt'>
                    <div className='header-profile-logo-inner-cnt'><p>P</p></div>

                </div>
            </div>
        </div>

    )

}
export default NavBar