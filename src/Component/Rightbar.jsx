import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import avtar1 from '../images/avtar1.avif'
import avtar2 from '../images/avtar2.avif'
import avtar3 from '../images/avtar3.avif'
import avtar4 from '../images/avtar4.avif'
import conv1 from '../images/conv1.avif'
import conv2 from '../images/conv2.avif'



const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs:"none",sm:"block"}}}>
        <Box position='fixed'>
          <Typography variant='h6' fontWeight='100' >Online Friends</Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src={avtar1} />
            <Avatar alt="Travis Howard" src={avtar2} />
            <Avatar alt="Cindy Baker" src={avtar3} />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src={avtar4} />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <Typography variant='h6' sx={{marginTop:3}} >Latest Conversations</Typography>
        
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={conv1} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={conv2} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={conv2} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
    </Box>
  )
}

export default Rightbar