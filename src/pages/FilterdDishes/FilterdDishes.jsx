import React from 'react'
import {Box, Container , styled , Typography} from '@mui/material'
import CustomCard from '../../components/customCard/CustomCard'
import{useNavigate} from 'react-router-dom'
import {AllMenuContext} from '../../components/allmenuContext/AllmenuContext'
import { useContext , useState , useEffect } from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import Popup from '../../components/popup/Popup'


const Dishes = () => {

  const navigate = useNavigate()

  const allmenu = useContext(AllMenuContext)
  let [trending, settrending] = useState([])
  let [showPopup, setshowPopup] = useState(false);
  let [popupItems, setpopupItems] = useState("");
 
  useEffect(()=>{
    let trendingItem = allmenu.filter((item)=>(
       item.strCategory === "Dessert"
    ))
    settrending(trendingItem)
  },[allmenu])
 
  


  const PropertyTextBox = styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
    },
  }))

  const DishesBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    marginTop:theme.spacing(5),
    [theme.breakpoints.down('md')]:{
      flexDirection:"column",
      alignItems:"center"
    },
  }))

  const trendingdishcount = 3

  let trendingdishData = trending.map((item , index)=>{
    if (index < trendingdishcount){
      return(
          <CustomCard 
          key={item.idMeal}
          img={item.strMealThumb}
          price='299'
          item={item.strMeal}
          likes='300'
          heart='500'
          share='600'
          showPopupHandler={showPopupHandler}/>
        )
      }
      return null
})

function showPopupHandler(dishname) {
  setpopupItems(dishname);
  setshowPopup(true);
}

function closepopupHandler(){
  setshowPopup(false)
}

function handleclick() {
  navigate("/dishes")
}

  return (
    <Box sx={{ mt:5, backgroundColor:'#FSFAFE', py:10}}>
      <Container>
      {showPopup && (
        <Popup
          closepopupHandler={closepopupHandler}
          popupItems={popupItems}
        ></Popup>
      )}
        <PropertyTextBox>
          <Typography sx={{color:'#000339', fontSize:'35px', fontWeight:'bold', ml:'13px'}}>
            Featured Dishes
          </Typography>
          
          <Typography sx={{color:'#SA6473', fontSize:'16px', mt:1 , ml:'13px'}}>
            Explore variety of South Indian Dishes
          </Typography>
        </PropertyTextBox>
        <DishesBox> 
          {trendingdishData}
        </DishesBox>
        
        <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                mt:5,
                }}>
                    <CustomButton
                    backgroundColor='#0f184c'
                    color="#fff"
                    buttonText="Explore More Dishes"
                    disheshBtn={true}
                    onClick={handleclick}/>
                </Box>
      </Container>

    </Box>
  )
}

export default Dishes








