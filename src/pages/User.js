import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  Grid
} from '@material-ui/core';
// components
// import Page from '../components/Page';
import ScheduleFilled from '@iconify/icons-ant-design/schedule-filled';
import CheckFilled from '@iconify/icons-ant-design/check-circle-filled';
import ClockFilled from '@iconify/icons-eva/clock-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../components/_dashboard/user';
import { QuickCard } from '../components/_dashboard/app';
//
import USERLIST from '../_mocks_/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'no', label: 'No', alignRight: false },
  { id: 'tanggal', label: 'Tanggal Undangan', alignRight: false },
  { id: 'name', label: 'Nama Sesuai KTP', alignRight: false },
  { id: 'hp', label: 'Handphone', alignRight: false },
  { id: 'bb', label: 'Pernah menjadi driver Bluebird', alignRight: false },
  { id: 'tol', label: 'Pernah menjadi driver taksi online', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Daftar Pelamar</Typography>
        </Box>

        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button
            to="#"
            size="small"
            onClick={() => setShowAll(!showAll)}
            color="inherit"
            endIcon={<Icon icon={arrowIosForwardFill} />}
          >
            {`${showAll ? 'Tutup' : 'Lihat'} Sebagian`}
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <QuickCard
              title="Lulus, Menunggu NIP"
              color="#005249"
              backgroundColor="#C8FACD"
              total={200000000}
              icon={CheckFilled}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickCard
              title="Menunggu Interview"
              color="#04297A"
              backgroundColor="#D0F2FF"
              total={200000000}
              icon={ClockFilled}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickCard
              title="Interview"
              color="#7A4F01"
              backgroundColor="#FFF7CD"
              total={200000000}
              icon={ScheduleFilled}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickCard
              title="Tidak Lulus"
              color="#7A0C2E"
              backgroundColor="#FFE7D9 "
              total={200000000}
              icon={ScheduleFilled}
            />
          </Grid>
          {showAll && (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <QuickCard
                  title="Interview"
                  color="#7A4F01"
                  backgroundColor="#FFF7CD"
                  total={200000000}
                  icon={ScheduleFilled}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <QuickCard
                  title="Tidak Lulus"
                  color="#7A0C2E"
                  backgroundColor="#FFE7D9 "
                  total={200000000}
                  icon={ScheduleFilled}
                />
              </Grid>
            </>
          )}
        </Grid>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id, name, hp, status, bb, avatarUrl, tol, no } = row;
                      const isItemSelected = selected.indexOf(name) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          {/* <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, name)}
                            />
                          </TableCell> */}
                          <TableCell align="left">{no}</TableCell>
                          <TableCell align="left"> 23 Agus 2021</TableCell>
                          <TableCell align="left">{name}</TableCell>

                          <TableCell align="left">{hp}</TableCell>
                          <TableCell align="left">{bb ? 'Pernah' : 'Tidak Pernah'}</TableCell>
                          <TableCell align="left">{tol ? 'Pernah' : 'Tidak Pernah'}</TableCell>
                          <TableCell align="left">
                            <Label
                              variant="ghost"
                              color={(status === 'Tidak Lulus' && 'error') || 'success'}
                            >
                              {status}
                            </Label>
                          </TableCell>

                          <TableCell align="right">
                            <UserMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
}
