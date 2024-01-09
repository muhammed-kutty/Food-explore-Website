import React from 'react'
import {Box, Typography , Container} from '@mui/material'
import { styled} from '@mui/system'    

import starsImg from '../../assets/Star.png'
import logosImg from '../../assets/logos.png' 


const Partner = () => {

  const Custoncontainer = styled(Container)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down("md")]: {
      flexDirection:'column',
      alignItems:'center',
      textAlign:'center',
      marginBottom: theme.spacing(4)
    },
  }))

  const CustomBox= styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
      marginBottom : theme.spacing(4)
    }
  }))
  const CustomLogo = styled(Typography)(({theme})=>({
    backgroundColor:"#ffb902",
    color:"black",
    width:"80px",
    height:"80px",
    borderRadius:"50%",
    display:'flex',
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
    fontWeight:"bolder",
    cursor:'pointer',
    border:"5px solid rgba(255,255,255,0.5) ",
    [theme.breakpoints.down("md")]:{
        display:'block',
    }

}))
  return    (
   <Box sx={{mt:10}}>
      <Custoncontainer>
        <CustomBox>
          <CustomLogo>Food Explore</CustomLogo>
          <Typography variant='body2'
              sx = {{
                  color:"#0708589",
                  fontSize:"16px",
                  fontWeight:"bold",
                  mt:2,
              }}>
              More than 3 cities
          </Typography>
       </CustomBox>

        <Box>
          <img src={starsImg} alt="star" style={{ maxWidth:"100%"}} />
          <Typography variant='body2' 
            sx={{
              color:'#708589',
              fontSize:'16px',
              fontWeight:'bold',
              mt:2
            }}>
              5-star Rating (2k plus Review)
          </Typography>
          </Box>
          </Custoncontainer>

          <Container sx={{
            display:"flex",
            flexDirection:"column"
            }}>
            <img src={logosImg} alt='logos'  />
          </Container>
        
      

   </Box>
  )
}
    
export default Partner