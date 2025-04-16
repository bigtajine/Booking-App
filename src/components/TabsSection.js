import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 2 }}><Typography>{children}</Typography></Box>}
  </div>
);

const TabsSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{ mb: 2, p: 2 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Info Tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          '& .MuiTabs-scrollButtons': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Tab label="Passengers" />
        <Tab label="Invoices" />
        <Tab label="History" />
        <Tab label="Tasks" />
        <Tab label="ATOL" />
        <Tab label="Memos" />
        <Tab label="Notes" />
        <Tab label="Quick Fee" />
        <Tab label="Discount" />
        <Tab label="Enquiries" />
        <Tab label="Refunds" />
      </Tabs>
      <Box sx={{ overflowX: 'auto' }}>
        <TabPanel value={value} index={0}>Passengers</TabPanel>
        <TabPanel value={value} index={1}>Invoices</TabPanel>
        <TabPanel value={value} index={2}>History</TabPanel>
        <TabPanel value={value} index={3}>Tasks</TabPanel>
        <TabPanel value={value} index={4}>ATOL</TabPanel>
        <TabPanel value={value} index={5}>Memos</TabPanel>
        <TabPanel value={value} index={6}>Notes</TabPanel>
        <TabPanel value={value} index={7}>Quick Fee</TabPanel>
        <TabPanel value={value} index={8}>Discount</TabPanel>
        <TabPanel value={value} index={9}>Enquiries</TabPanel>
        <TabPanel value={value} index={10}>Refunds</TabPanel>
      </Box>
    </Box>
  );
};

export default TabsSection;
