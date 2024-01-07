import React from 'react'
import {Box , styled , Typography} from '@mui/material'


const AboutUs = () => {
    const CustomBox = styled(Box)(({theme})=>({
        width:"30%",
        [theme.breakpoints.down('md')]:{
            width:"85%"
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
    <Box 
        sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            padding:"40px",
            mt:"65px",
            mb:"325px"
        }}>
        <Driver/>
        <Typography variant='body2' 
            sx={{
                fontSize:"35px",
                fontWeight:"bold",
                color:"#000339",
                my:3
            }}>
                About us
        </Typography>

        <CustomBox>
            <Typography variant='body2' 
                sx={{
                    fontSize:"16px",
                    fontWeight:"500",
                    color:"#SA6473",
                    textAlign:"center"
                }}>
                    Welcome to our restuarent, where culinary excelence meets warm hospitlity 
            </Typography>
        </CustomBox>
    </Box>
  )
}

export default AboutUs