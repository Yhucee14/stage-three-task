import React from 'react';
import './Body.css';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Typography from '@mui/material/typography';
import {Button} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import image4 from '../Body/image4.png';
import image6 from '../Body/image6.png';
import image3 from '../Body/image3.png';
import image5 from '../Body/image5.png';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        '"Segoe UI Symbol"',
      ].join(','),

      fontSize: 20,
      color: 'black',
      fontWeight: 400,
     
      button: {
            '&:hover': {
                backgroundColor: '#A02279',
            },


        textTransform: 'none',
        
      }
    },

  });

const Body = () => {
  return (
    
        <ThemeProvider theme={theme}>
            <div className='bodycon'>
                <div className='typocon'>
                    <div className='typocon1'>
                        <Typography  variant='h3'>
                        Rent a <b className='txtcol'>place</b> away from <b className='txtcol'>Home</b> in the <b className='txtcol'>Metaverse</b>
                        </Typography> 
                    </div> 
                    
                    <div className='typocon2'>
                        <Typography  variant='h6'>
                        We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
                        </Typography>
                    </div>

                    
                    <div>
                        <ButtonGroup>
                            <TextField variant='outlined'
                            size="small"
                            type='text'
                            label='search for location'
                            color='secondary'
                            sx={{ width: 300,}}/>

<Button variant='contained' size="small" sx={{ bgcolor: '#A02279', paddingLeft: 10, paddingRight: 10, borderRadius: 0.5, marginRight: 15, }}>
                                    Search
                            </Button>


                        </ButtonGroup>

                       
                    </div>
            
                </div>


                <div className='imgcon'>
                <div className='imgcon1'>
                <img src={image4} alt="logo" />
                <img src={image6} alt="logo" />
                </div>

                <div className='imgcon2'>
                <img src={image3} alt="logo" />
                <img src={image5} alt="logo" />
                </div>
                </div>

            </div>

        </ThemeProvider>
       
  
  )
}

export default Body