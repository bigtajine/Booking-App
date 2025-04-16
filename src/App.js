import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CssBaseline, Switch, FormControlLabel, TextField, Button, Collapse, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BookingTable from './components/BookingTable';
import TransactionDetails from './components/TransactionDetails';
import TabsSection from './components/TabsSection';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [clientId, setClientId] = useState('6736'); // Set initial Client ID to 6736
  const [clientDetails, setClientDetails] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Example booking data
  const bookings = [
    {
      clientId: 6736,
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
      clientName: 'Mr. Conor McCauley',
      address: '1234 Elm Street, Manchester',
      phone: '+44 1234 56789',
      email: 'conor.mccauley@example.com',
      transactions: [
        {
          atol: true,
          type: 'BSP',
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
          ref: null,
          date: '28/06/2025',
          cost: 10.00,
          payments: 10.00,
          refunds: 0.00,
          balance: 0.00,
        }
      ],
    },
    // Add more booking entries here if necessary
  ];

  // Set clientDetails when bookings are available
  useEffect(() => {
    const booking = bookings.find(b => b.clientId.toString() === clientId);
    setClientDetails(booking || null);
  }, [clientId]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box my={4}>
          {/* Header with Dark Mode Toggle */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }} />
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
              label="Dark Mode"
            />
          </Box>

          {/* Client ID Search Input */}
          <Box mb={3}>
            <TextField
              label="Client ID"
              variant="outlined"
              size="small"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              fullWidth
            />
          </Box>

{/* Client Name Display and Expandable Details */}
{clientDetails && (
  <>
    <Box mb={2}>
      <Card 
        sx={{ cursor: 'pointer' }} 
        onClick={() => setExpanded(!expanded)}
      >
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {clientDetails.clientName}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body1">{clientDetails.phone}</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body1">{clientDetails.email}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>

    <Collapse in={expanded}>
      <Box mb={2}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body1">{clientDetails.address}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Collapse>
  </>
)}


          {/* Display Search Results */}
          {clientDetails ? (
            <>
              <BookingTable bookings={[clientDetails]} />
              {/* Dropdown of transactions */}
              <Box mb={3}>
                <Button
                  variant="outlined"
                  onClick={() => setExpanded1(!expanded1)}
                  sx={{ marginBottom: 2 }}
                >
                  {expanded1 ? 'Hide Transactions' : 'Show Transactions'}
                </Button>

                <Collapse in={expanded1}>
                  {<TransactionDetails />}
                </Collapse>
              </Box>
              <TabsSection />
            </>
          ) : (
            <Typography variant="body1"></Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
