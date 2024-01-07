import React from "react"
import { useState , useEffect} from 'react'


export const AllMenuContext = React.createContext()

export const AllMenus= (props)=>{
    
    let [menu,setMenu]=useState([])
    let [loading] = useState(false)

    async function getdata(){
        
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let responce = await fetch(API_URL)
        let data = await responce.json()
        setMenu(data.meals)
        
    }

    useEffect( ()=>{
        getdata();
    },[])

    return(

      <AllMenuContext.Provider value={menu}>
                
        {!loading ? props.children : <h2>Loading</h2>}

      </AllMenuContext.Provider>   
    )
}

