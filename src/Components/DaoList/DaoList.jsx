import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DaoListItem from '../DaoListItem/DaoListItem';
import { Grid } from '@material-ui/core';
import Filters from '../Filters/Filters';
import AllDaoInfo from '../AllDaoInfo/AllDaoInfo';

const DaoList = () => {
  const [allDaos, setAllDaos] = useState([]);
  useEffect(() => {
    axios.get('/daoList').then(({ data }) => {
      setAllDaos(data);
    });
  }, []);

  return (
    <Grid
      item
      container
      xs={10}
      // direction="row"
      style={
        {
          // height: '100vh',
          // backgroundColor: 'yellow',
        }
      }
    >
      <AllDaoInfo />
      <Filters />

      {allDaos.map((dao) => {
        return <DaoListItem key={dao.full_name} dao={dao} />;
      })}
    </Grid>
  );
};

export default DaoList;
