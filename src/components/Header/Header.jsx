import React, {useState} from 'react'
import {Box,  Typography} from '@mui/material'
import {styled} from '@mui/system'

import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import MIscelleneousServiceIcon from '@mui/icons-material/MiscellaneousServices'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const Header = () => {

    function mobileDrawer(item){
        navigate(item.path)
    }   

    const [mobile, setmobile] = useState({left:false})
    const navigate = useNavigate()

    const toogleDrawer = (anchor , open)=>(event)=>{
        if(event.type === "keydown" && (event.type === 'Tab' || event.type === 'shift')){
            return ;
        }
        setmobile({...mobile,[anchor]:open})
    }

    const listItem =(anchor)=>(
        <Box 
        sx={{
            width:anchor === 'top' || anchor === 'bottom' ? "auto" : 250 
           
        }}
        role="presentation"
        onClick={toogleDrawer(anchor,false)}
        onKeyDown = {toogleDrawer(anchor,false)}
        >
            <List>
                {
                    nav_tittles.map((item,index)=>(
                        <ListItem key={item.key} disablePadding onClick={()=>mobileDrawer(item)}>
                            <ListItemButton>
                            <ListItemIcon>
                                {
                                    index === 0 && <HomeIcon/>
                                }
                                {
                                    index === 1 && <FeaturedPlayListIcon/>
                                }
                                {
                                    index === 2 && <MIscelleneousServiceIcon/>
                                }
                                {
                                    index === 3 && <ContactsIcon/>
                                }
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
      </List>
      
        </Box>
    )

    const nav_tittles=[{
        key:1,
        path:'/',
        display:'Home'
    },
    {
        key:2,
        path:'/dishes',
        display:'Dishes',
    },
    {
        key:3,
        path:'/Services',
        display:'Services',
    },
    
    {
        key:4,
        path:'/cart',
        display:'Cart',
    },
    
    {
        key:5,
        path:'/about',
        display:'About us',
    },
]
    const NavbarLinksBox = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            display:'none'
        }

    }))

    const NavbarLinks = styled(Typography)(()=>({
        fontSize:'18px',        
        color:'#4F5163',
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{
            color:'#fff'
        }
        
        
    }))

   

    const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
        cursor:'pointer',
        display:'none',
        marginRight:theme.spacing(2),
        [theme.breakpoints.down("md")]:{
            display:'block',
            marginRight:theme.spacing(1),

        }
        
    }))
    const CustomLogo = styled(Typography)(({theme})=>({
        backgroundColor:"#ffb902",
        color:"black",
        width:"80px",
        height:"80px",
        borderRadius:"50%",
        display:'flex',
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center",
        fontWeight:"bolder",
        cursor:'pointer',
        border:"5px solid rgba(255,255,255,0.5) ",
        [theme.breakpoints.down("md")]:{
            display:'block',
             
        }
    
    }))
  return (
    <>
        <Box 
            sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'40px',
            maxWidth:'auto',
            backgroundColor:'#FED801',
            marginLeft:'0px',
            marginBottom:'-24px'
        }}>
            <Box
                sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                gap:'2.5rem'
                }}>
                    <Box 
                     sx={{
                        display:'flex',
                        alignItems:'center',
                        }}>
                        <CustomMenuIcon onClick={toogleDrawer('left' ,true)}/> 
                     
                        <Drawer
                            anchor='left'
                            open={mobile['left']}
                            onClose={toogleDrawer('left' ,false)}
                            >
                            {listItem("Left")}

                        </Drawer>
                        <CustomLogo onClick={()=>navigate('/')} >Food Explore</CustomLogo>
                    </Box>

                <NavbarLinksBox>
                {
                    nav_tittles.map((item,i)=>(
                        <NavbarLinks key={item.key} variant='body2' onClick={()=>navigate(item.path)}>
                        {item.display}
                         </NavbarLinks>
                    ))
                }
                </NavbarLinksBox>  
            </Box>
           
        </Box>
    </>
  )
}

export default Header