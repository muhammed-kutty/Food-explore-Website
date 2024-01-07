import React from 'react'
import {Box , Typography , Container , styled} from '@mui/material'
import delivaryimg from '../../assets/DeliveryImg.png'
import CustomButton from '../../components/customButton/CustomButton'
import{useNavigate} from 'react-router-dom'




const Delivery = () => {

  const navigate = useNavigate()


    const CustomContainer = styled(Container)(({theme})=>({
        backgroundColor:"#fED801",
        height:"416px",
        borderRadius:"15px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        [theme.breakpoints.down('md')]:{
            height:"auto",
            flexDirection:"column",
            alignItems:"center",
            padding:theme.spacing(3,3,0,3),
            width:"90%",
            marginBottom:theme.spacing(3)
        }
    }))

    const CustomBox = styled(Box)(({theme})=>({
        padding:theme.spacing(10, 0 , 10 , 0),
        margin:theme.spacing(0,2,0),
        [theme.breakpoints.down("md")]:{
            padding:"0",
            
        }
    }))



function handleclick() {
  navigate("/dishes")
}

  return (
    <CustomBox>
        <CustomContainer>
            <Box>
                <Typography 
                  sx={{
                    fontSize:"35px",
                    color:"white",
                    fontWeight:"700",
                    fontFamily:"monospace"
                  }}>
                    Super Fast Home Delivery
                </Typography>

                <Typography 
                  sx={{
                    fontSize:"16px",
                    color:"#000",
                    fontWeight:"800",
                    my:3,
                    fontFamily:"monospace"
                  }}>
                    Door to Door Delivery
                </Typography>
                  <CustomButton
                    backgroundColor="#fff"
                    color="#172757"
                    buttonText="Order Now!!" 
                    onClick={handleclick}/>
            </Box>
            <img 
                src={delivaryimg}
                alt="delivery" 
                style={{maxWidth :"100%"}}/>
        </CustomContainer>
    </CustomBox>
  )
}

export default Delivery