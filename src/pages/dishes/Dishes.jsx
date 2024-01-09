import React from 'react'
import {Box, Container ,  styled , Typography} from '@mui/material'
import CustomCard from '../../components/customCard/CustomCard'

import {AllMenuContext} from '../../components/allmenuContext/AllmenuContext'
import { useContext , useState , useEffect } from 'react'
import Pagination from '../../components/pgination/Pagination'
import Popup from '../../components/popup/Popup'
// import {StateContext} from '../../Context/AppProvider'

const Dishes = () => {

  const allmenu = useContext(AllMenuContext)
  // const Cartcontext = useContext(StateContext)


  const [trending, settrending] = useState([])
  const [menuCategory, setmenuCategory] = useState([])
  const [singleDish , setsingleDish] = useState([])
  const [active , setactive]= useState("Beef")
  const [FilterDish, setFilterDish] = useState([])
  let [showPopup, setshowPopup] = useState(false);
  let [popupItems, setpopupItems] = useState("");


  async function getCatagoryData() {
    const CATEGORY_API_URL =
      "https://www.themealdb.com/api/json/v1/1/categories.php";
    let responce = await fetch(CATEGORY_API_URL);
    let categorydata = await responce.json();
    setmenuCategory(categorydata.categories);
  }

  function getsingledish() {
    let singleDishdata = allmenu.filter((item) => {
      return item.strCategory === "Beef";
    });
    setsingleDish(singleDishdata)
  }
   useEffect(()=>{
     getCatagoryData()
     let trendingItem = allmenu.filter((item)=>(
        item.strCategory === "Dessert"
     ))
     settrending(trendingItem)
     getsingledish()
   }, [] )


   let [currentPage, setCurrentPage] = useState(1);
   let [itemsperPage] = useState(4);
 
   let indexOflastDissh = currentPage * itemsperPage;
   let indexoffirstDish = indexOflastDissh - itemsperPage;
   let showtheseDishes = FilterDish.slice(indexoffirstDish, indexOflastDissh);
 

 


  const PropertyTextBox = styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
    },
  }))

  const DishesBox = styled(Box)(({theme})=>({
    display:'flex',
    flexWrap:"wrap",
    justifyContent:'center',
    marginTop:theme.spacing(5),
    [theme.breakpoints.down('md')]:{
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center"

    },
  }))
  const CategoryBox = styled(Box)(({theme})=>({
    justifyContent:"center",
    textAlign:"center",
    marginLeft:"350px",
    width:"450px",
    [theme.breakpoints.down("md")]:{
      alignItems:"center",
      marginLeft:"0px",
      width:"350px"
    }
  }))


  let trendingdishData = trending.map((item , index)=>{
   
      return(
          <CustomCard 
          key={item.idMeal}
          img={item.strMealThumb}
          price='299'
          item={item.strMeal}
          likes='300'
          heart='500'
          share='600'
          showPopupHandler={showPopupHandler}
        />
        )
      
})

function showPopupHandler(dishname) {
  setpopupItems(dishname);
  setshowPopup(true);
}

function closepopupHandler(){
  setshowPopup(false)
}

function showcategoryItems(data){
  setsingleDish([])
  setactive(data)

  let itemsperCategory = allmenu.filter((item)=>{
    return item.strCategory === data
  }).map((item)=>{
    return(
      <CustomCard
        key={item.idMeal}
        img={item.strMealThumb}
        price='299'
        item={item.strMeal}
        likes='300'
        heart='500'
        share='600'
        showPopupHandler={showPopupHandler}
        />
    )
  })
  setFilterDish(itemsperCategory)
}

let category = menuCategory.map((item)=>(
  <li 
    style={{
      backgroundColor:item.strCategory === active ?"black" :" #ffb902",
      color:item.strCategory === active ?"white":'black',
      padding:"12px 30px",
      borderRadius:"30px",
      marginRight:"20px",
      marginBottom:"20px",
      cursor:"pointer",
      fontWeight:"bold",
      transition:"all ease 0.3s"
    }} onClick={()=>showcategoryItems(item.strCategory)}
    key={item.idCategory}>{item.strCategory}</li>
))
let singledish = singleDish.map((item)=>{
  return(
    <CustomCard 
    key={item.idMeal}
    img={item.strMealThumb}
    price='299'
    item={item.strMeal}
    likes='300'
    heart='500'
    share='600'
    showPopupHandler={showPopupHandler}
    />
  )
  })

  return (
    <Box sx={{ mt:5, backgroundColor:'#FSFAFE', py:10,  }}>
      <Container>
       {showPopup && (
        <Popup
          closepopupHandler={closepopupHandler}
          popupItems={popupItems}
        ></Popup>
      )}
        <PropertyTextBox>
          <Typography sx={{color:'#000339', fontSize:'35px', fontWeight:'bold', ml:'13px'}}>
            Trending Dishes
          </Typography>
          
          <Typography sx={{color:'#SA6473', fontSize:'16px', mt:1 , ml:'13px'}}>
            Explore variety of South Indian Dishes
          </Typography>
        </PropertyTextBox>
        <DishesBox > 
         
          {trendingdishData}
          
        </DishesBox>
        
        
        <CategoryBox>
          <Typography variant='h2'
            sx={{ 
              backgroundColor:" #ffb902",
              color:'white',
              display:"flex",
              textAlign:"center",
              justifyContent:"center",
              marginTop:"30px",
              fontWeight:"bold",
             
              borderRadius:"30px",
              alignItems:"center",
              
            }}>
                Categories
          </Typography>
        </CategoryBox>
      <DishesBox >
       <ul style={{display:"flex",flexWrap:"wrap",marginTop:"30px",maxWidth:"1000px",margin:"auto"}}>
        {category}
       </ul>
       
      </DishesBox>
      
      <DishesBox>
        
        {singledish}
        {singleDish.length > 0 || FilterDish.length > 0 ?(showtheseDishes):
        (
          <Box sx={{display:"flex",flexDirection:"row"}}>
            <h3 style={{color:"red"}}>No Item Found</h3>
          </Box>
        )}

      </DishesBox>
      <DishesBox>
        <Box sx={{alignItems:"center", justifyContent:"center", textAlign:"center"}} >
          <Pagination
              FilterDish={FilterDish}
              itemsperPage={itemsperPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              />
          
        </Box>
       

      </DishesBox>
      </Container>

    </Box>
  )
}

export default Dishes