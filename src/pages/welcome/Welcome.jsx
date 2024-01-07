import { Box, } from '@mui/system'
import {styled} from '@mui/system'
import {Container} from  '@mui/system'
import CustomButtton  from '../../components/customButton/CustomButton'
import React from 'react'
import welcome from '../../assets/welcome.png'
import { Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'
const Welcome = () => {

  const navigate = useNavigate()

  const CustomBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    gap:theme.spacing(5),
    marginTop:theme.spacing(3),
    [theme.breakpoints.down('md')]:{
      flexDirection:'column',
      alignItems:'center',
      textAlign:'center',
    },
  }))
const Title = styled(Typography)(({theme})=>({
  fontSize:'64px',
  color:'#fff',
  fontWeight:"bold",
  margin:theme.spacing(4,0,4,0),
  [theme.breakpoints.down('sm')]:{
    fontSize:'40px',
  },
}))


function handleClick() {
  navigate("/about");
 
}


  return (
    <Box sx={{backgroundColor:'#FED801', minHeight:'80vh'}}>
      <Container>
        <CustomBox>
          <Box sx={{flex:'1'}}>
            <Typography variant='body2'
                        sx={{
                          fontSize:'18px',
                          color:'#687690',
                          fontWeight:'50px',
                          mt:10,
                          mb:4,
                        }}> 
              Welcom to Food Expolre
            </Typography>
            <Title variant='h1'>
              Discover a place where you will love to eat!!!
            </Title>
            <Typography variant='body2' sx={{fontSize:'18px', color:'#SA6473' , my: 4}}>
                Imerse Your self elegent ambiance as you saver each bit, accompnied by our extensive selection of hand-picked juices and carefully curated cocktails.
            </Typography>
            <CustomButtton 
              backgroundColor='#0f184c'
              color="#fff"
              buttonText="More About Us"
              welcomeBtn={true}
              onClick={handleClick}/>
          </Box>
          <Box sx={{ flex:"1.25"}}>
              <img 
                src={welcome}
                alt="Welcome"
                style={{maxWidth :"100%", marginBottom:"2rem"}}/>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}

export default Welcome