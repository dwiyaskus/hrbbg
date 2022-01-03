import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@material-ui/lab';
// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: 'Bayar',
    time: '10 Menit',
    type: 'order1'
  },
  {
    title: 'Preparation',
    time: '10 Menit',
    type: 'order2'
  },
  {
    title: 'Cooking',
    time: '10 Menit',
    type: 'order3'
  },
  {
    title: 'Ready & Serve',
    time: '10 Menit',
    type: 'order4'
  },
  {
    title: 'Complete',
    time: '10 Menit',
    type: 'order5'
  }
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'order1' && 'info.main') ||
              (type === 'order2' && 'info.main') ||
              (type === 'order3' && 'info.main') ||
              (type === 'order4' && 'warning.main') ||
              (type === 'order5' && 'success.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {time}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Order Timeline" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
