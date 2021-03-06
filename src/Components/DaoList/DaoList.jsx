import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DaoListItem from '../DaoListItem/DaoListItem';
import { Grid } from '@material-ui/core';
import Filters from '../Filters/Filters';
import AllDaoInfo from '../AllDaoInfo/AllDaoInfo';
import TableHeaders from '../TableHeaders/TableHeaders';
import './DaoList.css';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from '@material-ui/core';

const DaoList = () => {
  const [allDaos, setAllDaos] = useState([]);
  const [numOfDaos, setNumOfDaos] = useState();
  const [totalAum, setTotalAum] = useState();

  useEffect(() => {
    axios.get('/daoList').then(({ data }) => {
      setAllDaos(data);
      setNumOfDaos(data.length);
      setTotalAum(() => {
        return data.reduce((acc, curr) => {
          const number = Number(curr.aum) || 0;
          acc += number;
          return acc;
        }, 0);
      });
    });
  }, []);

  return (
    <Grid item container xs={10}>
      <AllDaoInfo numOfDaos={numOfDaos} totalAum={totalAum} />
      <Filters
        setAllDaos={setAllDaos}
        allDaos={allDaos}
        setNumOfDaos={setNumOfDaos}
        setTotalAum={setTotalAum}
      />
      <TableContainer id="listContainer">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaders setAllDaos={setAllDaos} allDaos={allDaos} />
            </TableRow>
          </TableHead>
          <TableBody>
            {allDaos.map((dao) => {
              return <DaoListItem key={dao.full_name} dao={dao} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default DaoList;
