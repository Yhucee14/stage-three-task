import React from 'react';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import {Typography, Button, IconButton} from "@mui/material";
import './Wallet.css';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import metaface from '../Components/metaface.png';
import wallcon from '../Components/wallcon.png';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

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

const Wallet = ({open, onClose}) => {
  if(!open) return null
  return (
    <ThemeProvider theme={theme}>
        <div onClick={onClose} className='mod'>

          <div onClick={(e) => {
            e.stopPropagation()
          }} className='modcover'>
          <Typography  variant='h6' className='modwall' sx={{
        marginTop: 1,
    
      }}>
                Connect Wallet
            </Typography>

            <Typography onClick={onClose}  variant='h6'> <ClearOutlinedIcon size='small' sx={{
        marginTop: 2,
    
      }}/> </Typography> 
          </div><hr></hr>

          <div className='modbtn'>
            
            <div  className='choose'>
            <Typography >choose your preferred wallet :</Typography>

            </div>
         
         

<Button component="span" sx={{ display: 'flex',
justifyContent: 'space-between',
height: '68px',
width: '536px',
left: '32px',
borderRadius: 2, }} variant="outlined" endIcon={<KeyboardArrowRightOutlinedIcon />} className='but'> 

<IconButton size='small' edge='start' aria-label='logo' className='icon'>
<img src={metaface} alt="logo" /> 
  <b sx={{
    //styleName: 18 SemiBold;
// fontFamily: Sora,
fontSize: 1,
fontWeight: 200,
  }}>Metamask</b>
</IconButton>

</Button>

<Button component="span"sx={{ display: 'flex',
justifyContent: 'space-between',
height: '68px',
width: '536px',
left: '32px',
borderRadius: 2,
marginTop: 1.5, }} variant="outlined" endIcon={<KeyboardArrowRightOutlinedIcon />} className='but1'> 

    <IconButton size='small' edge='start' aria-label='logo' >
<img src={wallcon} alt="logo" 
className='icon'/> 
  <b>WalletConnect</b>
</IconButton>

</Button>


          </div>


              </div>
    </ThemeProvider>
  )
}

export default Wallet
