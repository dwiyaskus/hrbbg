import { Icon } from '@iconify/react';
// import bugFilled from '@iconify/icons-ant-design/schedule-filled';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography, Grid } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0)
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3)
}));

// ----------------------------------------------------------------------

const QuickCardDemografi = (props) => {
  const { title, color, backgroundColor, data, icon } = props;
  return (
    <RootStyle
      style={{
        color,
        backgroundColor
      }}
    >
      <IconWrapperStyle
        style={{
          color,
          backgroundImage: `linear-gradient(135deg, ${alpha(backgroundColor, 0)} 0%, ${alpha(
            color,
            0.24
          )} 100%)`
        }}
      >
        <Icon icon={icon} width={24} height={24} />
      </IconWrapperStyle>
      {/* <Typography variant="h3">{fShortenNumber(total)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography> */}
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {data &&
          data.map((item) => (
            <Grid item xs={12}>
              <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                {item.name}
              </Typography>
              <Typography variant="h3"> {item.data}</Typography>
            </Grid>
          ))}
      </Grid>
    </RootStyle>
  );
};

export default QuickCardDemografi;
