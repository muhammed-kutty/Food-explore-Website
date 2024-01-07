import React from 'react'
import {styled, Typography, Box, Container} from '@mui/material'
import housecard from '../../assets/ambience.jpg'

const Ambiance = () => {
const CustomBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:theme.spacing(10),
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        textAlign:"center"
    },
    
}))

const ImgContainer = styled(Box)(({theme})=>({
    width:"100%",
    [theme.breakpoints.down("md")]:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
}))

const LargeText = styled(Typography)(({theme})=>({
    fontSize:"64px",
    color:"#000",
    fontWeight:"700",
    [theme.breakpoints.down('md')]:{
        fontSize:"32px"
    }
}))

const SmallText = styled(Typography)(({theme})=>({
    fontSize:"18px",
    color:"#788037",
    fontWeight:"500",
    [theme.breakpoints.down("md")]:{
        fontSize:"14px"
    }
}))

const TextFlexBox = styled(Box)(({theme})=>({
    marginTop:theme.spacing(7),
    display:"flex",
    justifyContent:"space-between",
    padding:theme.spacing(0,5,0,5),
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        gap:theme.spacing(5)
    },
}))

const Driver = styled("div")(({theme})=>({
    width:"13%",
    height:"5px",
    backgroundColor:"#000339",
    [theme.breakpoints.down("md")]:{
        marginLeft:"auto",
        marginRight:"auto"
    },
}))

  return (
    <Box sx={{ py:10}}>
        <Container>
            <CustomBox>
                <ImgContainer>
                    <img src={housecard} alt="house" style={{ maxWidth:"100%"}} />
                </ImgContainer>
                <Box>
                    <Driver/>
                    <Typography
                        sx={{
                            fontSize:"35px",
                            color:"#000339",
                            fontWeight:"700",
                            my:3,
                        }}>
                            You've Found a Ambiance You Love
                    </Typography>
                    <Typography
                        sx={{
                            fontSize:"16px",
                            color:"#000339",
                            fontWeight:"700",
                            my:3,
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti, rerum accusantium culpa, laudantium quidem aut nemo laborum distinctio dolore dolores aspernatur. Perferendis, reiciendis illo.
                    </Typography>
                </Box>
            </CustomBox>
            
            <TextFlexBox>
                <Box 
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                  }}>
                    <LargeText>250+</LargeText>
                    <SmallText>Dishes</SmallText>
                </Box>

                <Box 
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                  }}>
                    <LargeText>300+</LargeText>
                    <SmallText>Trusted Clients </SmallText>
                </Box>

                <Box 
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                  }}>
                    <LargeText>350+</LargeText>
                    <SmallText>Delivery per Day</SmallText>
                </Box>

            </TextFlexBox>
        </Container>
    </Box>
  )
}

export default Ambiance