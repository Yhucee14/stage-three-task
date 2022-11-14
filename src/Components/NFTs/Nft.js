import React from 'react'
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Header from '../Header/Header';
import {AppBar, Toolbar, Stack, Button} from '@mui/material';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { Box, Card, CardContent, Typography, CardMedia} from "@mui/material";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import card1 from '../Cards/card1.png';
import card2 from '../Cards/card2.png';
import card3 from '../Cards/card3.png';
import card4 from '../Cards/card4.png';
import card5 from '../Cards/card5.png';
import card6 from '../Cards/card6.png';
import card7 from '../Cards/card7.png';
import card8 from '../Cards/card8.png';
import './Nft.css';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#A02279',
    },
    '& .MuiRating-iconHover': {
      color: '#A02279',
    },
  });


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        '"Segoe UI Symbol"',
      ].join(','),

    //   fontSize: 20,
    //   fontWeight: 400,
     
      button: {
        textTransform: 'none'
      }
    },

  });

const Nft = () => {
  return (
    <ThemeProvider theme={theme}>
        <Header />

        <AppBar position='static' sx={{
        padding: 10,
        marginTop: 2,
        background: 'transparent', 
        boxShadow: 'none',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
       
    
      }}>
        <Toolbar sx={{
        // display: 'flex',
        // justifyContent: 'space-between',
    
      }}>

            <Stack direction='row' spacing='2' style={{padding: 5}}>
                <Button sx={{color: 'text.primary', paddingRight: 5, paddingLeft: 5,  fontSize: 20, fontWeight: 400,}}>Home</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 ,  fontSize: 20, fontWeight: 400,}}>Place to stay</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 ,  fontSize: 20, fontWeight: 400,}}>NFTs</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5 ,  fontSize: 20, fontWeight: 400,}}>Community</Button>
                <Button sx={{color: 'text.primary', paddingRight: 5, paddingLeft: 5,  fontSize: 20, fontWeight: 400,}}>Home</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5,  fontSize: 20, fontWeight: 400, }}>Place to stay</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5,  fontSize: 20, fontWeight: 400, }}>NFTs</Button>
                <Button sx={{ color: 'text.primary', paddingRight: 5, paddingLeft: 5,  fontSize: 20, fontWeight: 400, }}>Community</Button>
            </Stack>

            <Button variant="outlined" endIcon={<TuneOutlinedIcon />}
             sx={{
                borderRadius: 2,
                
            }}>
                Location
            </Button>
          
        </Toolbar>
      
    </AppBar>


    <div className='boxcon'>
        <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
         </Box>

         <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card2}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card3}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card4}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>
        </div> 

        
        <div className='boxcon'>
        <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card5}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
         </Box>

         <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card6}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card7}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card8}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>
        </div>

        <div className='boxcon'>
        <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card1}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
         </Box>

         <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card2}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card3}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card4}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>
        </div> 

        
        <div className='boxcon'>
        <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card5}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
         </Box>

         <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card6}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card7}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>

    <Box width='290px' className='cardbox' >
         <Card className='card'>
            <CardMedia className='cardmed'
            component='img'
            width='260'
            height='265'
            image= {card8}
            alt='unsplash'/>
            <CardContent className='cardcon'>
                <Typography gutterBottom variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                }}>
                    <div className='dking'>Desert king</div>
                    
                    <b className='avail'>1MBT per night</b>
                </Typography>
                <Typography variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                <div className='dking'>2345km away</div>
                
                <div className='avail'>available for 2weeks stay</div>
                </Typography>
               
               <Typography  variant='body2' component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',}}>
                     <div className='rate'>
                    <StyledRating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small"/>
                    </div>
               </Typography>
                
            
            </CardContent>
        </Card>
    </Box>
        </div>



    </ThemeProvider>
  )
}

export default Nft