import React from 'react'
import {Typography} from '@mui/material'
import {styled , Box, Container }  from '@mui/system'

import fbIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import linkedinIcon from '../../assets/instagram.png'
import {Link} from "react-router-dom"

const Footer = () => {
   


  const Custoncontainer = styled(Container)(({theme})=>({
    display:'flex',
    justifyContent:'space-around',
    gap:theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
      flexDirection :"column",
      textAlign:"center"
    },
  }))

 
  const IconBox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:"1rem",
    [theme.breakpoints.down('sm')]:{
      justifyContent:'center',
    },
  }))

  return (
    <Box sx={{py:10, backgroundColor:'#fff602' }}>
      <Custoncontainer>
        <Box>
          <Typography 
          sx={{
            fontSize:'20px',
            color:"black",
            fontWeight:"700",
            mb: 1,
            
          }}>
            Get in Touch
          </Typography>
          <Typography
          sx={{
            fontSize:'16px',
            color:"black",
            fontWeight:"500",
            mb: 1,
          }}>
            Keep in Touch with our social Media Pages.
          </Typography>
          <IconBox>
            <Link to="https://www.faceboook.com/">
              <img
                src={fbIcon}
                alt="fbicon"
                style={{cursor:'pointer'}}
                />
              </Link>
              <Link to="https://www.twitter.com/">
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{cursor:'pointer'}}/>
              </Link>
              <Link to="https://www.instagram.com/">
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{cursor:'pointer'}}/>
                </Link>
          </IconBox>
        </Box>
      </Custoncontainer>

    </Box>
    )
}

export default Footer