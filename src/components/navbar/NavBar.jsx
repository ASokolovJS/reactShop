import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Avatar, Grid} from "@mui/material";


export const NavBar = () => {
    return (
        <Box>
            <AppBar position="static">
               <Grid container>
                   <Grid item md={11}/>
                   <Grid item>
                       <Avatar sx={{m:1}}>U</Avatar>
                   </Grid>
               </Grid>
            </AppBar>
        </Box>
    );
}