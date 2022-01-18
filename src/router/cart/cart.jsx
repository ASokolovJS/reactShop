import { Box, Button, Table, TableHead, TableBody, TableCell, TableRow} from "@mui/material";


function createData(name, item, price) {
  return { name, item, price };
}

const rows = [
  createData("item1", 5, 123),
  createData("item2", 1, 12443),
  createData("item3", 9, 12355),
];


export const Cart = () => {
  return (
      <Box sx={{
        ml: 4,
        mr: 4
      }}>
        <h1>Корзина</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Товар</TableCell>
              <TableCell>Кол-во</TableCell>
              <TableCell>Цена</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell><Button>Удалить</Button></TableCell>   
            </TableRow>
          ))}
          </TableBody>          
        </Table>
      </Box>
  );
};
