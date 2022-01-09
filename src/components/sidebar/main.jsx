import {Box, Divider, List, ListItemButton} from "@mui/material";
import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <Box>
            <div className='logotype'>
                <h1>SnackCase</h1>
            </div>
            <div>
                <h3>Menu</h3>
                <Divider/>
                <List>
                    <ListItemButton>
                    <Link to="/home" underline="none">
                        Главная
                    </Link>
                    </ListItemButton>
                    <ListItemButton>Оплата</ListItemButton>
                    <ListItemButton>Доставка</ListItemButton>
                </List>
            </div>

            <div>
                <h3>Товары</h3>
                <Divider/>
                <List>
                    <ListItemButton>Снеки</ListItemButton>
                    <ListItemButton>Коробки</ListItemButton>
                </List>
            </div>
        </Box>
    )
}