import { Box } from '@mui/system'
import React from 'react'

const Pagination = ({  FilterDish , itemsperPage , currentPage , setCurrentPage}) => {
  
    let numPage = []


    for(let i=1; i<=Math.ceil( FilterDish.length/itemsperPage); i++){
        numPage.push(i)
        
    }


    function currentpageseter(event){
        let currentPage = event
        setCurrentPage(currentPage)
        
    }
    let page= numPage.map((pageNumber , index)=>{
        return(
            <li key={index} id={pageNumber} onClick={(e)=>currentpageseter(e.target.id , pageNumber )} 
                style={{
                    backgroundColor:index === currentPage-1 ? "black":'',
                    color:index === currentPage-1 ? "white":'',
                    width:"30px",
                    height:"30px",
                    border:"1px solid grey",
                    margin:"0 5px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    cursor:"pointer",
                    padding:"8px",
                    transition:"all ease 0.3s",}}>
                
                    {pageNumber}
                
            </li>
        )
    })

  
  
    return (
        <Box>
    
        <ul style={{display:"flex" ,justifyContent:"center",margin:"50px 0 0"}}>
            {page}
        </ul>      
  
        </Box>
         )
}

export default Pagination