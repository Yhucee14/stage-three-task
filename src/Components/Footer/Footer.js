import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import token from '../Footer/token.png';
import mask from '../Footer/mask.png';
import meta from '../Footer/meta.png';
import sea from '../Footer/sea.png';
import OpenSea from '../Footer/OpenSea.png';
import './Footer.css';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        '"Segoe UI Symbol"',
      ].join(','),

      fontSize: 20,
      fontWeight: 400,
     
      button: {
        textTransform: 'none'
      }
    },

  });

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position='static' sx={{
        marginTop: 0,
        background: '#A02279',
        color: 'white', 
        boxShadow: 'none',
        width: "100%",
      }}>

        <Toolbar sx={{
        display: 'flex',
    
    
      }}> 
            <div className='leftfoot'>
            <IconButton size='large' edge='start' aria-label='logo' >
            <img src={token} alt="logo" /> 
            </IconButton>

            <Typography variant='h6' component='div' style={{
           marginTop: 6,
           fontSize: 40,
           fontWeight: 700,
           padding: 3,
           fontFamily: [
            'AirbnbCereal_W_Bd',
          ].join(','),}}>
            
            </Typography>
            </div>
           

            <div className='cenfoot'>
            <IconButton size='large' edge='start' aria-label='logo' >
            <img src={mask} alt="logo" /> 
            </IconButton>

            <Typography variant='h6' component='div' style={{
           marginTop: 8,
           padding: 3,
          
           }}>
                <img src={meta} alt="logo" />
            </Typography>
            </div>

            <div className='rightfoot'>
            <IconButton size='large' edge='start' aria-label='logo' >
            <img src={sea} alt="logo" /> 
            </IconButton>

            <Typography variant='h6' component='div'
            style={{
              marginTop: 18,
              padding: 3,
             
              }}>
                 <img src={OpenSea} alt="logo" />
            </Typography>
            </div>

       

 
        </Toolbar>
      
    </AppBar>
    </ThemeProvider>
  )
}

export default Footer