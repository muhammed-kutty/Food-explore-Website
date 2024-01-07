import React from 'react'
import {Box, Typography , styled } from '@mui/material'
import likeIcon from '../../assets/like.png'
import  heartIcon from '../../assets/heart.png'
import shareIcon from '../../assets/share.png'
 
const CustomCard= ({img,price,item,likes,heart,share,showPopupHandler}) => {
  const Dishbox = styled(Box)(({theme})=>({
    display:"flex",
    flexWrap:"wrap",
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px',
    backgroundColor:'#fff',
    width:"220px",
    margin:theme.spacing(0,2,0,2),
    cursor:"pointer",
    [theme.breakpoints.down('md')]:{
      margin:theme.spacing(2,0,2,0),
      flexDirection:"column"
    },
    "&:hover":{
      backgroundColor:"#f5f5f5",
      boxShadow:"0 0 5px rgba(0, 0, 0, 0.2)",
      transform:"scale(1.05)",
      transition:"all 0.3s ease-in-out"
      }
  }))
  const ImgContainer = styled(Box)(({theme})=>({
      width:"100%",

  }))

  const InfoBox = styled(Box)(()=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  }))
function alertbox(item){
  showPopupHandler(item)
}
  return(
    <Dishbox onClick={()=>alertbox(item)}>
      <ImgContainer>
    
        <img src={img} alt="houseimg" style={{width:"220px",borderRadius:"10px",}}  />
      </ImgContainer>
      <Box sx={{ padding:"1rem"}}>
        <Typography variant='body2' sx={{fontWeight:"700"}}>
          ${price}
        </Typography>
        <Typography variant='body2' sx={{my : 2}}>
          {item}
        </Typography>
        <Box 
          sx={{
            display:'flex',
            alignItems:"center",
            justifyContent:"space-between"
          }}>
            <InfoBox>
              <img src={likeIcon} alt="LikeIcon" />
              <Typography variant='body2' sx={{ mt:1}}>
                {likes}
              </Typography>
            </InfoBox>
              
            <InfoBox>
              <img src={heartIcon} alt="HeartIcon" />
              <Typography variant='body2' sx={{ mt:1}}>
                {heart}
              </Typography>
            </InfoBox>  

            <InfoBox>
              <img src={shareIcon} alt="ShareIcon" />
              <Typography variant='body2' sx={{ mt:1}}>
                {share}
              </Typography>
            </InfoBox>  
        
        </Box>
      </Box>
    </Dishbox>
  )
}
export default CustomCard
