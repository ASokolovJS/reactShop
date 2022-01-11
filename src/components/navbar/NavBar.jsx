import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Avatar, Badge, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar sx={{ borderRadius: 3 }} position="static">
        <Grid container>
          <Grid item md={11} />
          <Grid item>
          <Link to='/cart'>
            <IconButton>
              <Badge color="secondary" badgeContent={5}>
                  <ShoppingCartOutlinedIcon sx={{color: "white"}}/>
              </Badge>
            </IconButton>
            </Link>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ m: 0.5 }}>U</Avatar>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Профиль</MenuItem>
              <MenuItem onClick={handleClose}>Мои заказы</MenuItem>
              <MenuItem onClick={handleClose}>Выйти</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};
