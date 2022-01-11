import { Box, Divider, List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Box>
      <div className="logotype">
        <h1>SnackCase</h1>
      </div>
      <div>
        <h3>Menu</h3>
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItemButton>Главная</ListItemButton>
          </Link>
          <Link to="/payment" style={{ textDecoration: 'none' }}> 
						<ListItemButton>Оплата</ListItemButton>
					</Link>
					<Link to='/delivery' style={{textDecoration: 'none'}}>
          <ListItemButton>Доставка</ListItemButton>
					</Link>
					<Link to='/cart' style={{textDecoration: 'none'}}>
          <ListItemButton>Корзина</ListItemButton>
					</Link>
					<Link to='/about' style={{textDecoration: 'none'}}>
          <ListItemButton>О нас</ListItemButton>
					</Link>
        </List>
      </div>

      <div>
        <h3>Товары</h3>
        <Divider />
        <List>
          <ListItemButton>Снеки</ListItemButton>
          <ListItemButton>Коробки</ListItemButton>
        </List>
      </div>
    </Box>
  );
};
