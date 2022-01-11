import { Box, Container, Table, TableHead, TableRow } from "@mui/material";

export const Cart = () => {
  return (
    <Container>
      <Box>
        <h1>Корзина</h1>
        <Table>
          <TableHead>
            <TableRow>
              Товар
            </TableRow>
          </TableHead>
        </Table>
      </Box>
    </Container>
  );
};
