// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import ScheduleFilled from '@iconify/icons-ant-design/schedule-filled';
import CheckFilled from '@iconify/icons-ant-design/check-circle-filled';
// import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import {
  // AppTasks,
  // AppNewsUpdate,
  // AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  // AppTrafficBySite,
  // AppCurrentSubject,
  AppConversionRates,
  QuickCardDemografi
} from '../components/_dashboard/app';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <QuickCardDemografi
              title="Pengalaman Wajib"
              color="#005249"
              backgroundColor="#C8FACD"
              total={200000000}
              icon={CheckFilled}
              data={[
                {
                  name: 'Ex Bluebird',
                  data: [25]
                },
                {
                  name: 'Ex Taksi Online',
                  data: [875]
                }
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickCardDemografi
              title="Umur"
              color="#04297A"
              backgroundColor="#D0F2FF"
              total={200000000}
              data={[
                {
                  name: '25 - 35 Tahun',
                  data: [825]
                },
                {
                  name: '36 - 45 Tahun',
                  data: [75]
                },
                {
                  name: '46 - 55 Tahun',
                  data: [0]
                }
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickCardDemografi
              title="Pendidikan"
              color="#7A4F01"
              backgroundColor="#FFF7CD"
              total={200000000}
              data={[
                {
                  name: 'Perguruan Tinggi',
                  data: [72]
                },
                {
                  name: 'SMA/SMK',
                  data: [216]
                },
                {
                  name: 'SMP',
                  data: [0]
                },
                {
                  name: 'SD',
                  data: [0]
                }
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickCardDemografi
              title="Tidak Lulus"
              color="#7A0C2E"
              backgroundColor="#FFE7D9 "
              total={200000000}
              icon={ScheduleFilled}
            />
          </Grid> */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates />
          </Grid>

          {/*   <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
