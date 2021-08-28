import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  Box,
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/ExpandMore';

const DaoSummary = ({ dao, setOpen }) => {
  return (
    <>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen((open) => !open)}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <img
          src={dao.logo_link}
          style={{ width: '50px', borderRadius: '50%' }}
          alt="dao logo"
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <Typography>{dao.full_name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{dao.category}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{dao.aum}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{dao.date_founded}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{dao.blockchain}</Typography>
      </TableCell>
    </>
  );
};

export default DaoSummary;
