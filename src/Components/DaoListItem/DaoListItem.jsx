import React, { useState } from 'react';
import DaoPreview from '../DaoPreview/DaoPreview';
import DaoSummary from '../DaoSummary/DaoSummary';
import { TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const DaoListItem = ({ dao }) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <DaoSummary dao={dao} setOpen={setOpen} />
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <DaoPreview dao={dao} open={open} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default DaoListItem;
