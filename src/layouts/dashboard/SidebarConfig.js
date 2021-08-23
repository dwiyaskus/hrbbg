import { Icon } from '@iconify/react';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import taxiLocal from '@iconify/icons-ic/baseline-person-add-alt';
import personOutline from '@iconify/icons-ic/outline-person';
import punchClockOutline from '@iconify/icons-ic/outline-punch-clock';
import quotesFilled from '@iconify/icons-ic/baseline-format-quote';
import sharpSpaceDashboard from '@iconify/icons-ic/sharp-space-dashboard';
import carRentalOutline from '@iconify/icons-ic/outline-car-rental';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon(sharpSpaceDashboard)
  },
  {
    title: 'Pelamar',
    path: '/dashboard/pelamar',
    icon: getIcon(taxiLocal)
  },
  {
    title: 'Pengemudi',
    path: '/dashboard/pengemudi',
    icon: getIcon(carRentalOutline)
  },
  {
    title: 'Karyawan',
    path: '/dashboard/karyawan',
    icon: getIcon(personOutline)
  },
  {
    title: 'Absensi',
    path: '/dashboard/absensi',
    icon: getIcon(punchClockOutline)
  },
  {
    title: 'Quotes',
    path: '/dashboard/quote',
    icon: getIcon(quotesFilled)
  }
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
