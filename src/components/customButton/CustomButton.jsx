import { Button } from '@mui/material'
import React from 'react'
import {styled} from '@mui/system'


const CustomButton = ({
    backgroundColor ,
    color,
    buttonText,
    welcomeBtn,
    guidBtn,
    getstartedBtn,
    disheshBtn,
    onClick,
}) => {
    const CustomButton = styled(Button)(({theme})=>({
        backgroundColor:backgroundColor,
        color:color,
        fontWeight:'700',
        fontSize:'14px',
        cursor:'pointer',
        padding:'0.5rem 1.25rem',
        borderRadius:'7px',
        textTransform:'none',
        display:'block',
        border:'2px solid transparent',
        "&:hover":{
          backgroundColor:color,
          color:backgroundColor,
          borderColor:backgroundColor,
        },
        [theme.breakpoints.down("md")]:{
          margin:(welcomeBtn || getstartedBtn || disheshBtn) && theme.spacing(0,'auto',3,'auto'),
          width:(welcomeBtn || getstartedBtn || disheshBtn) && '90%',
        },
        [theme.breakpoints.down("sm")]:{
          marginTop : guidBtn && theme.spacing(3),
          width:guidBtn && '90%'
        }

      

    }))
  return (
    <CustomButton onClick={onClick}>{buttonText}</CustomButton>
  )
}

export default CustomButton