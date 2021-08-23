import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader, Typography, Grid } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA_PENGALAMAN = [
  {
    name: 'Ex Bluebird',
    data: [25]
  },
  {
    name: 'Ex Taksi Online',
    data: [875]
  }
];
const CHART_DATA_JENIS_KELAMIN = [
  {
    name: 'Perempuan',
    data: [25]
  },
  {
    name: 'Laki-laki',
    data: [875]
  }
];

const CHART_DATA_UMUR = [
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
];

const CHART_DATA_PENDIDIKAN = [
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
];

const CHART_DATA_ARMADA = [
  {
    name: 'Regular taksi',
    data: [825]
  },
  {
    name: 'SilverBird',
    data: [75]
  },
  {
    name: 'GoldenBird',
    data: [0]
  }
];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'bar',
      height: 100,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      y: {
        formatter(val) {
          return `${val}`;
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: 40
    }
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <Box sx={{ m: 3 }} dir="ltr">
            <ReactApexChart
              type="bar"
              series={CHART_DATA_PENGALAMAN}
              options={{
                ...chartOptions,
                title: {
                  text: 'Pengalaman Wajib'
                }
              }}
              height={150}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <Box sx={{ m: 3 }} dir="ltr">
            <ReactApexChart
              type="bar"
              series={CHART_DATA_JENIS_KELAMIN}
              options={{
                ...chartOptions,
                title: {
                  text: 'Jenis Kelamin'
                }
              }}
              height={150}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <Box sx={{ m: 3 }} dir="ltr">
            <ReactApexChart
              type="bar"
              series={CHART_DATA_UMUR}
              options={{
                ...chartOptions,
                title: {
                  text: 'Umur'
                }
              }}
              height={150}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <Box sx={{ m: 3 }} dir="ltr">
            <ReactApexChart
              type="bar"
              series={CHART_DATA_PENDIDIKAN}
              options={{
                ...chartOptions,
                title: {
                  text: 'Pendidikan Terakhir'
                }
              }}
              height={150}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <Box sx={{ m: 3 }} dir="ltr">
            <ReactApexChart
              type="bar"
              series={CHART_DATA_ARMADA}
              options={{
                ...chartOptions,
                title: {
                  text: 'Armada'
                }
              }}
              height={150}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
