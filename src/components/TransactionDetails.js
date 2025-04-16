import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const transactions = [
  {
    atol: true,
    type: 'BSP',
    supplier: 'BSP',
    ref: 'DAXYDJ',
    date: '02/07/2025',
    cost: 510.76,
    payments: 510.76,
    refunds: 0.00,
    balance: 0.00,
  },
  {
    atol: true,
    type: 'SERVICE FEE',
    supplier: 'Transaction Fees',
    ref: null,
    date: '28/06/2025',
    cost: 10.00,
    payments: 10.00,
    refunds: 0.00,
    balance: 0.00,
  },
  {
    atol: true,
    type: 'SERVICE FEE',
    supplier: 'Transaction Fees',
    ref: 'DAXYDJ',
    date: '28/06/2025',
    cost: 0.00,
    payments: 10.00,
    refunds: 0.00,
    balance: 0.00,
  }
];

const TransactionDetails = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleMenuClick = (event, transaction) => {
    setAnchorEl(event.currentTarget);
    setSelectedTransaction(transaction);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTransaction(null);
  };

  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>Transactions</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ATOL</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Date of Travel</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Payments</TableCell>
              <TableCell>Refunds</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((t, index) => (
              <TableRow key={index}>
                <TableCell>{t.atol ? 'YES' : 'NO'}</TableCell>
                <TableCell>{t.type}</TableCell>
                <TableCell>{t.supplier || ''}</TableCell>
                <TableCell>{t.date}</TableCell>
                <TableCell>{t.ref || ''}</TableCell>
                <TableCell>£{t.cost.toFixed(2)}</TableCell>
                <TableCell>£{t.payments.toFixed(2)}</TableCell>
                <TableCell>£{t.refunds.toFixed(2)}</TableCell>
                <TableCell>£{t.balance.toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={(event) => handleMenuClick(event, t)}
                    size="small"
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && selectedTransaction === t}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Edit Transaction</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Delete Transaction</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TransactionDetails;
