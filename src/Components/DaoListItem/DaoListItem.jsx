import React, { useState } from 'react';
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DaoPreview from '../DaoPreview/DaoPreview';
import DaoSummary from '../DaoSummary/DaoSummary';
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
