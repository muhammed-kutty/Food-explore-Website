import React, { useContext } from "react";
import { AllMenuContext } from "../allmenuContext/AllmenuContext";
import { Box,  styled  } from "@mui/material";
import CustomButtton from "../../components/customButton/CustomButton";
import {DispatchContext} from '../../Context/AppProvider'

const Popup = ({ closepopupHandler, popupItems }) => {

  const allmenu = useContext(AllMenuContext);
  const dispatch = useContext(DispatchContext)

  const dispatched = (item)=>{
   
    dispatch(
      {
          type: "Add to Cart",
          payload: {
              id: item.idMeal,
              title: item.strMeal,
              img: item.strMealThumb,
              qty: 1 ,
              price : 299,
              totalprice: 299,
          }
      })
      closepopupHandler()

  }


  const Dishbox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: " rgba(0,0,0,0.8) ",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "99",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    cursor: "pointer",
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
      flexDirection: "column",
    },
  }));
  const DishingredenceLi = styled("li")(() => ({
    display: "flex",
    backgroundColor: "white",
    padding: "8px 14px",
    borderRadius: "32px",
    fontSize: "14px",
    marginRight: "12px",
  }));
  const PopupItem = styled(Box)(({theme})=>({
    backgroundColor: "rgb(17,17,17)",
    width: "800px",
    height: "750px",
    borderRadius: "5px",
    padding: "20px",
    [theme.breakpoints.down("md")]:{
      width:"400px",
      height:"700px"

    }
  }))

  let popupDishes = allmenu
    .filter((item) => {
      return item.strMeal === popupItems;
    })
    .map((item) => {
      return (
        <Box key={item.idMeal}>
          <Box
            sx={{
              height: "30vh",
              overflow: "hidden",
              marginBottom: "20px",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={item.strMealThumb}
              alt=""
              style={{ width: "30%", height: "80%", borderRadius: "10px" }}
            />
            <h5
              style={{
                color: "white",
                marginBottom: "20px",
                backgroundColor: "blue",
              }}
            >
              {item.strCategory}
            </h5>
          </Box>
          <h2 style={{ color: "white", marginBottom: "10px" }}>
            {item.strMeal}
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              marginBottom: "30px",
              height: "150px",
              overflowY: "scroll",
            }}
          >
            {item.strInstructions}
          </p>
          <ul style={{ marginBottom: "30px", display: "flex" }}>
            <DishingredenceLi>{item.strIngredient1}</DishingredenceLi>
            <DishingredenceLi>{item.strIngredient2}</DishingredenceLi>
            <DishingredenceLi>{item.strIngredient3}</DishingredenceLi>
            <DishingredenceLi>{item.strIngredient4}</DishingredenceLi>
          </ul>
          <h2 style={{ color: "white", marginBottom: "30px" }}>Rs:- 299/-</h2>

          <CustomButtton
            backgroundColor="#0f184c"
            color="#fff"
            buttonText="Add to Cart"
            welcomeBtn={true}
            onClick={()=>dispatched(item)}
          />

          <h5
            style={{
              position: "absolute",
              top: 55,
              right: 35,
              color: "white",
              fontWeight: "600px",
              fontSize: "15px",
              cursor: "pointer",
              transition: "all ease 0.3s",
            }}
            onClick={closepopupHandler}
          >
            Close
          </h5>
        </Box>
      );
    });
  return (
    <Dishbox>
      <PopupItem>
        {popupDishes}
        </PopupItem>      
    </Dishbox>
  );
};

export default Popup;
