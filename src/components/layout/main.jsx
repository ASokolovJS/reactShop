import {Box, Divider, Grid} from "@mui/material";
import {NavBar} from "../navbar/NavBar";
import {Sidebar} from "../sidebar/main";
import {Routes, Route} from 'react-router-dom'
import Home from "../home/home";

export const MainLayout = () => {
 return (
     <Grid container>
         <Grid item md={2}>
             <Sidebar/>
         </Grid>
        <Grid item md={10}>
            <NavBar sx="auto"/>
            <Box>
                <div className='bodys'>
                    <Routes>
                        <Route path='/home' element={<Home/>} />
                    </Routes>
                </div>
                <div>
                    <Divider/>
                    <h1>Footer</h1>
                </div>
            </Box>
        </Grid>
     </Grid>
 )
}
