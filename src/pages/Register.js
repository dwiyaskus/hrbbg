// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import { AppNewsUpdate, AppOrderTimeline } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Order Summary</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
