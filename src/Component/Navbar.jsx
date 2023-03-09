import styled from '@emotion/styled'
import { Mail, Notifications } from '@mui/icons-material'
import { AppBar,Avatar,Badge, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import dp6 from '../images/dp6.png'

const Navbar = () => {
    const[open,setOpen]=useState(false)
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })
    // const Search = styled("div")(({theme})=>({
    //     background:"white",
    //     padding:"0 10px",
    //     borderRadius:theme.shape.borderRadius,
    //     width:"40%",
    //     // height:"13px"
    // }))
    const Icons = styled(Box)(({theme})=>({
           display:"flex",
           gap:"20px",
           alignItems:"center"
        }))
  return (
    <AppBar position='sticky' ><StyledToolbar>
        <Typography variant='h5' >

        Facebook
        </Typography>
        {/* <Search><InputBase placeholder='search...' /></Search> */}
        <input placeholder='search...' style={{"width":'40%',"borderRadius":"4px"}}  />
        <Icons>
            <Badge badgeContent={4} color="error">
            <Mail  />
            </Badge>
            <Badge badgeContent={4} color="error">
            <Notifications />
            </Badge>
            <Avatar src={dp6} onClick={(e)=>setOpen(true)} sx={{width:30,height:30}} ></Avatar>
            </Icons>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
  )
}

export default Navbar