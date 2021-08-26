import React, { useEffect, useState } from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Filters from '../Filters/Filters';
import AllDaoInfo from '../AllDaoInfo/AllDaoInfo';
import axios from 'axios';

const DaoPage = () => {
  const { id } = useParams();
  const [dao, setDao] = useState({});
  console.log(dao);

  useEffect(() => {
    (async () => {
      const {
        data: [daoData],
      } = await axios.get(`/dao/${id}`);

      setDao(daoData);
    })();
  }, [id]);

  return (
    <Grid item container xs={10}>
      <AllDaoInfo />
      <Filters />
      This is the DAo Page: {dao.full_name}
    </Grid>
  );
};

export default DaoPage;
