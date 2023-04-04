import React from 'react';
import { Link } from 'react-router-dom';
import { 
    styled,
    useTheme,
    Box,  
    Drawer, 
    List,  
    Divider,  
    IconButton,  
    ListItem,  
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
//icons-material не импортятся скопом, выдает ошибку!!!

const DrawerHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({ open, handleClose }) {
  const theme = useTheme();

  const pages = ['Головна', 'Обране'];
  const icons = [<HomeIcon />, <FavoriteIcon />];
  const links = ['/', '/favorite'];
  

    return (
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={() => handleClose()}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: '#000000' }}/> : <ChevronRightIcon sx={{ color: '#000000' }}/>}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ backgroundColor: '000000' }}/>
          <List>
            {pages.map((page, index) => (
              <Link key={page} to={links[index]}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: 'white' }}>
                      {icons[index]}
                    </ListItemIcon>
                    <ListItemText primary={page} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Box>
    );
  }