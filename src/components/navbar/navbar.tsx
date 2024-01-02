import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { useState } from "react";
import { navItems } from "src/config/constants";
import { Button } from "@mui/material";
import { Drawer } from "@mui/material";
import { Divider } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import AdjustIcon from '@mui/icons-material/Adjust'
import { useRouter } from "next/router";


interface Props {
  window?: () => Window;
}
const drawerWidth = 300

const Navbar = ({window}: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' , }}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px'}}>
      <Box sx={{ my: 2 , display: 'flex', alignItems: 'center', gap: '5px'}}>
        <AdjustIcon/>
        <Typography variant="h6">Yahyo</Typography>
      </Box>
      <CloseIcon/>
        </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <Box height={"10vh"} sx={{ display: "flex" }}>
      <AppBar sx={{height: '10vh', backgroundColor: '#2a282a'}} component="nav" >
        <Toolbar >
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ my: 2 , display: { xs: "none", sm: "flex" }, alignItems: 'center', gap: '5px',flexGrow: 1}}>
            <AdjustIcon/>
            <Typography
            variant="h6"
            component="div"
           
          >Yahyo</Typography>
          </Box>
         

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={()=> router.push(item.route)} key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
      
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `100%` },
          }}
        >
          {drawer}
        </Drawer>
      </nav>


    </Box>
  );
};

export default Navbar;
