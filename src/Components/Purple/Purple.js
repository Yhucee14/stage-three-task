import React from 'react'
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Typography from '@mui/material/typography';
import {Button} from '@mui/material';
import purplepic from '../Purple/purplepic.png';
import './Purple.css';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        '"Segoe UI Symbol"',
      ].join(','),

    //   fontSize: 20,
    //   fontWeight: 400,
     
      button: {
        bgcolor: '#A02279',
        borderRadius: 2,
        color: 'white',
      }
    },

  });
  

const Purple = () => {
  return (

    <ThemeProvider theme={theme}>

        <div className='purplecon'>

          <div className='purplewhite'>
            <div className='purplewhite1'>
            <Typography  variant='h3' sx={{
                fontWeight: 700,
                fontSize: 48,
                }}>
                Metabnb NFTs
            </Typography>
            </div> <br></br>
        
              <div  className='purplewhite2'>
              <Typography  variant='h6'>
                Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs give our customer access to loads of our exclusive services.
            </Typography>
              </div>

            <div>
              <Button variant='contained'>
              Learn more
              </Button>
            </div>

            
          </div>
            

        <img src={purplepic} alt="logo" />

        </div>

    </ThemeProvider>
    
  )
}

export default Purple