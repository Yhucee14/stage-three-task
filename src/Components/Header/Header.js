import React, {useState} from 'react'
import Group from '../Header/Group.png';
import {AppBar, Toolbar, IconButton, Stack, Button} from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Wallet from '../Wallet';


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
    const [openWallet, setOpenModal] = useState(false)


  return (
    <ThemeProvider theme={theme}>
    <AppBar position='static' sx={{
   
        marginTop: 2,
        background: 'transparent', 
        boxShadow: 'none',
        paddingTop: 5,
        paddingBottom: 0,
    
      }}>
        <Toolbar sx={{
        display: 'flex',
      
    
      }}>
            <IconButton size='large' edge='start' aria-label='logo' style={{marginTop: -10}}>
            <img src={Group} alt="logo" /> 
            {/* <img src={name} alt="name" style={{
           marginTop: 6,
           padding: 3
        }}/> */}
            </IconButton>


            <Stack direction='row' spacing='2' style={{padding: 2,
            marginLeft: 42,}}>
                <Button sx={{ 
                    color: 'text.primary', paddingRight: 2, paddingLeft: 2}}>Home</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 2, paddingLeft: 2, width: '192px', }}>Place to stay</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 2, paddingLeft: 2 }}>NFTs</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 2, paddingLeft: 2 }}>Community</Button>
            </Stack>

            <div>
            <Button variant='contained' sx={{
                bgcolor: '#A02279',
                borderRadius: 2,
                marginLeft: 12,
            }} onClick={() => setOpenModal(true)}>
                Connect wallet 
            </Button>

            <Wallet open={openWallet} onClose={() => setOpenModal(false)} />
            </div>
          

           
          
        </Toolbar>
      
    </AppBar>
    </ThemeProvider>
  )
}

export default Header