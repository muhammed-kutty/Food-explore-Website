import React from 'react'
import {Box, Typography} from '@mui/material'
import {styled } from '@mui/system'

import buyIcon from '../../assets/buy_icon.png'
import sellIcon from '../../assets/sell_icon.png'
import rentIcon from '../../assets/sell_icon.png'

import ArrowRightAltIcon  from '@mui/icons-material/ArrowRightAlt'
import CustomButton  from '../../components/customButton/CustomButton'

import {useNavigate} from 'react-router-dom'

const Booking = () => {

    const navigate = useNavigate()
     
    const guidBox=[
        {
            key:1,
            title:'Order Guides',
            img:<img src={buyIcon} alt="logos" />,
            text:'How to Order',
        },
        {
            key:2,
            title:'Booking Guides',
            img:<img src={rentIcon} alt="logos" />,
            text:'How to Book',
        },
        {
            key:3,
            title:'Payment Guides',
            img:<img src={sellIcon} alt="logos" />,
            text:'Payment Methode',
        }
    ]

const CustomBox = styled(Box)(({theme})=>({
    width:"30%",
    [theme.breakpoints.down("md")]:{
        width:"85%"
    }
}))

const GuidsBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:"space-between",
    width:'70%',
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
        width:'100%',
    },
    [theme.breakpoints.down("sm")]:{
        marginBottom:"0",
        flexDirection:"column"
    },
    
}))

const GuidBox = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
        margin:theme.spacing(2,0,2,0)
    }

    
}))
 function handleclick(){
    navigate("/Services")
 }

  return (
   <Box 
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'40px'   
      }}>
        <div style={{
            width:'5%',
            height:'5px',
            backgroundColor:'#000339',
            margin:'0 auto',
        }}>
        </div>
        <Typography variant='h3' sx={{
            fontSize:'35px',
            fontWeight:'bold',
            color:"#000339",
            my:3        }} >
                How to Book
        </Typography>

        <CustomBox>
            <Typography variant='body2'
            sx={{
                fontSize:"16px",
                fontWeight:"500",
                color:'#sa6473',
                textAlign:"center"
            }}>
                Everything You need to know when you book for advance slot
            </Typography>
        </CustomBox>
        <GuidsBox>
            {
                guidBox.map((item)=>(
                    <GuidBox key={item.key}>
                        {item.img}
                        <Typography 
                            variant='body2'
                            sx={{
                                fontWeight:'500',
                                fontSize:"20px",
                                color:"#3833c45",
                                my:1
                            }}>
                              {item.title}  
                        </Typography>
                        <Box
                            sx={{
                                cursor:"pointer",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                            <Typography
                                variant='body2'
                                sx={{
                                    fontWeight:"bold",
                                    fontSize:"14px",
                                    color:"#0689FF"
                                }}>
                                    {item.text}
                            </Typography>
                            <ArrowRightAltIcon style={{color:"#0689ff"}}/>    
                        </Box>
                    </GuidBox>
                ))
            }
        </GuidsBox>
            <CustomButton 
                backgroundColor="#0F184C"
                color="#fff"
                buttonText="See Full Guide"
                guidBtn={true}
                onClick={handleclick}
                />

   </Box>
  )
}

export default Booking