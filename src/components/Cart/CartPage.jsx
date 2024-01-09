import { Container,Typography} from "@mui/material";
import { Box , styled } from "@mui/system";
import React, { useContext } from "react";
import { StateContext } from "../../Context/AppProvider";
import { DispatchContext } from "../../Context/AppProvider";

const CartPage = () => {
  const cartpakage = useContext(StateContext);
  const dispatch = useContext(DispatchContext);


  const PropertyTextBox = styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
    },
  }))
  
  const Dishbox = styled(Box)(({theme})=>({
     display:"flex",
    flexWrap:"wrap",
    backgroundColor:'#fff',
    width:"100%",
    margin:theme.spacing(5),
    gap:theme.spacing(5),
    justifyContent:"center",
    [theme.breakpoints.down('md')]:{
      alignItems:"center",
      margin:theme.spacing(2,0,2,0),
      flexDirection:"column",
    },
   
  }))
  const ImgContainer = styled(Box)(({theme})=>({
      width:"100%",

  }))

  const InfoBox = styled(Box)(()=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  }))

  let cartPakagesAre = cartpakage.cartItems.map((item) => {
    return (
     < Box key={item.id}  >
        <ImgContainer>
          <img src={item.img} alt="houseimg" style={{width:"220px",borderRadius:"10px",}}  />
        </ImgContainer>
        <Box sx={{ padding:"1rem"}}>
          <Typography variant='body2' sx={{fontWeight:"700"}}>
            ${item.price}
          </Typography>
          <Typography variant='body2' sx={{my : 2}}>
          {item.title}
          </Typography>
          <Box 
          sx={{
            display:'flex',
            alignItems:"center",
            justifyContent:"space-between"
          }}>
            <InfoBox>
              <Typography sx={{ mt:1 , backgroundColor:"#ffb902",cursor:'pointer'}} onClick = {()=>{
                 dispatch({
                  type: "delete cart item",
                  payload: {
                    id: item.id,
                  },
                });
              }}>
              Delete
              </Typography>
              </InfoBox>
              <InfoBox  onClick={()=>alert('For Order please Contact Our Customer Service:- 09526137176 ')} >
              <Typography variant='body2' sx={{ mt:1 , backgroundColor:"#ffb902",cursor:"pointer"}} >
               OrderNow
              </Typography>
            </InfoBox>
            </Box>
      </Box>
        <hr style={{backgroundColor:"red", marginBottom:"10px"}}/>
      </Box>
    );
  });
  return (
    <Box sx={{ mt:5, backgroundColor:'#FSFAFE', py:10,  }}>
      <Container>
      <PropertyTextBox>
          <Typography sx={{color:'#000339', fontSize:'35px', fontWeight:'bold', ml:'13px'}}>
            Cart page
          </Typography>
          </PropertyTextBox>
      <Dishbox>
            {cartPakagesAre}
      </Dishbox>
      </Container>
    </Box>
    );
};

export default CartPage;
