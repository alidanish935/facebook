import { AccountBox, Home, ModeNight, NoteAdd,  People, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box  flex={2} sx={{display: {xs:"none",sm:"block"}}}  >

       <Box position='fixed'>

        <List>
          <ListItem disablePadding  >
            <ListItemButton component="a" href='#home'sx={{padding:"1px",m:"2px"}} >
              <ListItemIcon>
               <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'sx={{padding:"1px",m:"2px"}}>
              <ListItemIcon>
               <NoteAdd/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'sx={{padding:"1px",m:"2px"}}>
              <ListItemIcon>
               <People/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'sx={{padding:"1px",m:"2px"}}>
              <ListItemIcon>
               <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#friends'sx={{padding:"1px",m:"2px"}}>
              <ListItemIcon>
               <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#setting'sx={{padding:"1px",m:"2px"}}>
              <ListItemIcon>
               <Settings/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'sx={{padding:"1px",m:"2px"}}>
              <ListItemIcon>
               <AccountBox />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
               <ModeNight/>
              </ListItemIcon>
             <Switch/>
            </ListItemButton>
          </ListItem>
          </List>
    
       </Box>
    </Box>
  )
}

export default Sidebar