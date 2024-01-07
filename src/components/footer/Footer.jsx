import React from 'react'
import {Typography} from '@mui/material'
import {styled , Box, Container }  from '@mui/system'

import fbIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import linkedinIcon from '../../assets/instagram.png'

const Footer = () => {

  const FooterLinkFeature = [{
    key:1,
    display:"Guides"
  },
  {
    key:2,
    display:"Services"
  },
  {
    key:3,
    display:"Contact Us"
  }]

  const FooterLinkOverview = [{
    key:1,
    display:"Location"
  },
  {
    key:2,
    display:"PartnerShips"
  },
  {
    key:3,
    display:"Terms of use & privacy policies"
  }]

  const Custoncontainer = styled(Container)(({theme})=>({
    display:'flex',
    justifyContent:'space-around',
    gap:theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
      flexDirection :"column",
      textAlign:"center"
    },
  }))

  const Footerlink = styled("span")(({theme})=>({
    fontSize:"18px",
    color:"#000066",
    fontWeight:"300",
    cursor:"pointer",
    "&:hover":{
      color:"#6602FF",
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
    <Box sx={{py:10, backgroundColor:'#fff602'}}>
      <Custoncontainer>
        <Box>
          <Typography 
          sx={{
            fontSize:'20px',
            color:"black",
            fontWeight:"700",
            mb: 1,
          }}>
            Featured
          </Typography>

          {
            FooterLinkFeature.map((item,)=>(
              <Footerlink key={item.key}>
                {item.display}
                <br/>
              </Footerlink>
            ))
          }
        </Box>
        <Box>
          <Typography  
          sx={{
            fontSize:'20px',
            color:"black",
            fontWeight:"700",
            mb: 1,
          }}>
            Overview
          </Typography>
          {
            FooterLinkOverview.map((item,)=>(
              <Footerlink key={item.key}>
                {item.display}
                <br/>
              </Footerlink>
            ))
          }
        </Box>
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
              <img
                src={fbIcon}
                alt="fbicon"
                style={{cursor:'pointer'}}/>
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{cursor:'pointer'}}/>
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{cursor:'pointer'}}/>
          </IconBox>
        </Box>
      </Custoncontainer>

    </Box>
    )
}

export default Footer