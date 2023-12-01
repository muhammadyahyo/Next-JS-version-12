import { Telegram, Instagram, YouTube } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import { ButtonGroup } from "@mui/material"
import { Box } from "@mui/material"
import { format } from "date-fns"

const Footer = () => {
  return (
    <Box padding={'20px'} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#141414', color: 'white'}}>
     
     <Typography>© {format(new Date(), 'yyyy')} Yahyo. All rights reserved</Typography>
     <ButtonGroup disableElevation variant='contained' aria-label='Disabled elevation buttons' sx={{display:'flex', gap:'15px'}}>
      
        <Telegram sx={{cursor:'pointer'}}/>
        <Instagram sx={{cursor:'pointer'}}/>
        <YouTube sx={{cursor:'pointer'}}/>
     </ButtonGroup>
    </Box>
  )
}

export default Footer