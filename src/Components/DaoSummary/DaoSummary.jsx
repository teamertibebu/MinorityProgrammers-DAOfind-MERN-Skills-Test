import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { TableCell, IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/ExpandMore';
import StringifyNum from '../../StringifyNum';

const DaoSummary = ({ dao, setOpen }) => {
  const [aum, setAum] = useState('');

  useEffect(() => {
    setAum(StringifyNum(dao.aum));
  }, [dao]);

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
      <TableCell>
        <img
          src={dao.logo_link}
          style={{ width: '40px', borderRadius: '20%' }}
          alt="dao logo"
        />
      </TableCell>
      <TableCell align="center">
        <Typography>{dao.full_name}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{dao.category}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{aum}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{dao.date_founded}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{dao.blockchain}</Typography>
      </TableCell>
    </>
  );
};

export default DaoSummary;
