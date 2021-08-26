import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DaoListItem from '../DaoListItem/DaoListItem';
import { Grid } from '@material-ui/core';
import Filters from '../Filters/Filters';
import AllDaoInfo from '../AllDaoInfo/AllDaoInfo';
import daoList from '../../dataData.json';
import { Route, Link } from 'react-router-dom';

const DaoList = () => {
  //For Development Only://////////////////
  const numOfDaos = daoList.length;
  const totalAum = daoList.reduce((acc, curr) => {
    const number = Number(curr.aum) || 0;
    acc += number;
    return acc;
  }, 0);
  /////////////////////////////////////////
  // const [allDaos, setAllDaos] = useState([]);
  // useEffect(() => {
  //   axios.get('/daoList').then(({ data }) => {
  //     // setAllDaos(data);
  //     console.log();
  //   });
  // }, []);

  return (
    // <Route exact path="/">
    <Grid
      item
      container
      xs={10}
      style={
        {
          // backgroundColor: 'yellow',
        }
      }
    >
      <AllDaoInfo numOfDaos={numOfDaos} totalAum={totalAum} />
      <Filters />

      {daoList.map((dao) => {
        return <DaoListItem key={dao.full_name} dao={dao} />;
      })}
    </Grid>
    // </Route>
  );
};

export default DaoList;
