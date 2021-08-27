import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DaoListItem from '../DaoListItem/DaoListItem';
import { Grid } from '@material-ui/core';
import Filters from '../Filters/Filters';
import AllDaoInfo from '../AllDaoInfo/AllDaoInfo';

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

      {allDaos.map((dao) => {
        return <DaoListItem key={dao.full_name} dao={dao} />;
      })}
    </Grid>
  );
};

export default DaoList;
