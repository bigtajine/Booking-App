import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const GuestInfo = () => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">Guest Info</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>Name: Mr. Conor McCauley</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Email: conor@example.com</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Mobile: 01234 567890</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default GuestInfo;
