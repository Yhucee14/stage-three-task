import React from 'react'
import logo from '../Header/House.svg';
import name from '../Header/name.svg';
import {AppBar, Toolbar, IconButton, Stack, Button} from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';

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
  



const Header = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position='static' sx={{
        padding: 1,
        marginTop: 3,
        background: 'transparent', 
        boxShadow: 'none'
    
      }}>
        <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
    
      }}>
            <IconButton size='large' edge='start' aria-label='logo' style={{marginTop: -10}}>
            <img src={logo} alt="logo" /> 
            <img src={name} alt="name" style={{
           marginTop: 6,
           padding: 3
        }}/>
            </IconButton>


            <Stack direction='row' spacing='2' style={{padding: 3}}>
                <Button sx={{ 
                    color: 'text.primary', paddingRight: 5, paddingLeft: 5}}>Home</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 }}>Place to stay</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 }}>NFTs</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 }}>Community</Button>
            </Stack>

            <Button variant='contained' sx={{
                bgcolor: '#A02279',
                borderRadius: 2
            }}>
                Connect wallet
            </Button>
          
        </Toolbar>
      
    </AppBar>
    </ThemeProvider>
  )
}

export default Header