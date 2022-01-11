import { Box, Divider, Grid } from "@mui/material";
import { NavBar } from "../navbar/NavBar";
import { Sidebar } from "../sidebar/main";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../router/home/home";
import { Footer } from "../footer/footer";
import { Payment } from "../../router/payment/payment";
import { Delivery } from "../../router/delivery/delivery";
import { Cart } from "../../router/cart/cart";
import { About } from "../../router/about/about";

export const MainLayout = () => {
  return (
    <Grid container>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10}>
        <NavBar sx="auto" />
        <Box>
          <div className="bodys">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/payment" element={<Payment />} />
              <Route path='/delivery' element={<Delivery/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
          </div>
          <div>
            <Divider />
            <Footer />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};
