import { Container} from "@mui/material";
import { Box , styled } from "@mui/system";
import React, { useContext } from "react";
import { StateContext } from "../../Context/AppProvider";
import { DispatchContext } from "../../Context/AppProvider";

const CartPage = () => {
  const cartpakage = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const H1 = styled('h1')(()=>({
    colort: "black",
    cursor: "pointer",
    marginBottom: "4px",
    backgroundColor: "#ffb902",
    borderRadius: "4px",
    textAlign: "center",
    width: "60%",
    fontSize: "12px",
    marginTop: "8px",
  }))

  const AddtocartMain = styled(Box)(({theme})=>({
    width:"190px",
    padding:"0px",
    backgroundColor:"azure",
    right:"15px",
    top:"39%",
    position:"absolute",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("md")]:{
      position:"inherit"
    }
  }))

  const AddtocartItems = styled(Box)(({theme})=>({
    alignItems:'center',
    justifyContent:"center",
  }))
  let cartPakagesAre = cartpakage.cartItems.map((item, index) => {
    return (
      <Box key={index}>
        <h5 style={{marginBottom:"10px",textAlign:"center",fontSize:"15px",width:"130px",marginTop:"15px"}}>{item.title}</h5>
        <img src={item.img} alt="" style={{width:"130px",height:"120px",borderRadius:"9px"}} />
        <H1
          onClick={() => {
            dispatch({
              type: "delete cart item",
              payload: {
                id: item.id,
              },
            });
          }}
        >
          Delete
        </H1>
        <h2>Rs:- {item.price}</h2>
        <H1 style={{width:"100%"}} >
          For order pleas contact us...
        </H1>
        <hr style={{backgroundColor:"red"}}/>
      </Box>
    );
  });
  return (
    <AddtocartMain>
      <Container>
        <AddtocartItems>
          <h4 style={{backgroundColor:"#ffb902",color:"black",marginTop:"20px",marginBottom:"15px",textAlign:"center",borderRadius:"12px",fontSize:"20px"}}>Your Cart</h4>
            {cartPakagesAre}
            
        </AddtocartItems>
      </Container>
    </AddtocartMain>
  );
};

export default CartPage;
