import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TableContainer,
} from '@material-ui/core';

const DaoPage = () => {
  const { id } = useParams();
  const [dao, setDao] = useState({});

  useEffect(() => {
    (async () => {
      const {
        data: [daoData],
      } = await axios.get(`/dao/${id}`);
      console.log(daoData);
      setDao(daoData);
    })();
  }, [id]);

  return (
    <>
      <TableContainer style={{ width: '80%', height: '100vh' }}>
        <Table style={{ border: '1px solid lightgrey', marginBottom: '10px' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography>Dao Description</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>Total Value Locked(TVL)</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ height: '100px', width: '400px' }}>
                <Typography>
                  {dao.description || 'No Description Available'}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography align="center">{dao.TVL}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table
          style={{
            border: '1px solid lightgrey',
            position: 'relative',
            bottom: '0',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Symbol</Typography>
              </TableCell>
              <TableCell>
                <Typography>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography>Blockchain</Typography>
              </TableCell>
              <TableCell>
                <Typography>Headquarters</Typography>
              </TableCell>
              <TableCell>
                <Typography>Year Founded</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>
              <Typography>{dao.governance_token_symbol}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{dao.full_name}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{dao.blockchain}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{dao.headquarters || 'N/A'}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{dao.date_founded}</Typography>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DaoPage;
