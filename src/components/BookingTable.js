import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography,
  TextField, Box
} from '@mui/material';

const bookings = [
  {
    id: 3178,
    date: '31/03/2025',
    status: 'Booked',
    surname: 'McCade',
    dot: '02/06/2025',
    adults: 1,
    children: 0,
    infants: 0,
    destination: 'Coonamble',
    cost: 520.76,
    paid: 520.76,
    refunds: 0.00,
    balance: 0.00,
  },
  // Add more if needed
];

const BookingTable = () => {
  const [search, setSearch] = useState('');

  const filteredBookings = bookings.filter(booking =>
    booking.surname.toLowerCase().includes(search.toLowerCase()) ||
    booking.destination.toLowerCase().includes(search.toLowerCase()) ||
    booking.id.toString().includes(search)
  );

  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Bookings</Typography>
        <TextField
          label="Search bookings"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      {/* Box wrapping the table with conditional horizontal scroll */}
      <Box
        sx={{
          width: '100%',
          overflowX: { xs: 'auto', xl: 'hidden' },  // Enable scroll only on smaller screens, hide on large screens (e.g., xl)
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>DOT</TableCell>
              <TableCell>Adults</TableCell>
              <TableCell>Children</TableCell>
              <TableCell>Infants</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Refunds</TableCell>
              <TableCell>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.status}</TableCell>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.surname}</TableCell>
                <TableCell>{booking.dot}</TableCell>
                <TableCell>{booking.adults}</TableCell>
                <TableCell>{booking.children}</TableCell>
                <TableCell>{booking.infants}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>£{booking.cost.toFixed(2)}</TableCell>
                <TableCell>£{booking.paid.toFixed(2)}</TableCell>
                <TableCell>£{booking.refunds.toFixed(2)}</TableCell>
                {/* Conditionally style the balance: if positive, make it green */}
                <TableCell sx={{ backgroundColor: booking.balance == 0 ? 'green' : 'inherit' }}>
                  £{booking.balance.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default BookingTable;
