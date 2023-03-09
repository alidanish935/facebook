import React from 'react'
import {Settings,Add} from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
// import { style } from '@mui/system';
import styled from '@emotion/styled';


const Practice = () => {
    const BlueButton = styled(Button)({
        background:"blue",
            color:"grey",
            margin:5,
            "&:hover":{
              backgroundColor:"lightblue"
            },
            "&:disabled":{
              backgroundColor:"lightblue"
            }
      })
  return (
    <div>
        <Button variant='outlined' color='success'>outlined</Button>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings/>} size='small' variant="contained" color='secondary'>Contained</Button>
      <Button startIcon={<Add />} color='success' variant="contained">ADD NEW POST</Button>
      <Typography variant='h3' >My name is danish ali</Typography>

      <Button  variant='contained' sx={{
        background:"skyblue",
        color:"grey",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"lightblue"
        }
      }} >My Unique Button</Button>
       <Button  variant='contained' sx={{
        background:"skyblue",
        color:"grey",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"lightblue"
        }
      }} >My Unique Button</Button>
      <BlueButton>My Button</BlueButton>
      <BlueButton>My New Button</BlueButton>
    </div>
  )
}

export default Practice