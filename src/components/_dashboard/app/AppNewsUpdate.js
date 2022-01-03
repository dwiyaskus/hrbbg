import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import deleteOutline from '@iconify/icons-eva/close-outline';
// material
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
  Grid
} from '@material-ui/core';
// utils
import { mockImgCover } from '../../../utils/mockImages';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(setIndex),
    postedAt: faker.date.soon()
  };
});

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

const Item = ({ title, image }) => (
  <>
    <Box
      component="img"
      alt={title}
      src={image}
      sx={{ width: 48, height: 48, borderRadius: 1.5 }}
    />
    <Box sx={{ minWidth: 150 }}>
      <Link to="#" color="inherit" underline="hover" component={RouterLink}>
        <Typography variant="subtitle2" noWrap>
          Nasi Goreng
        </Typography>
      </Link>
      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        Rp. 30.000
      </Typography>
    </Box>
  </>
);
function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2} justifyContent="space-between">
      <Item title={title} image={image} />
      <Button variant="text" to="" color="error" sx={{ float: 'right' }}>
        Remove
      </Button>
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      {/* <CardHeader title="News Update" /> */}

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      {/* <Divider /> */}

      {/* <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View all
        </Button>
      </Box> */}
    </Card>
  );
}
