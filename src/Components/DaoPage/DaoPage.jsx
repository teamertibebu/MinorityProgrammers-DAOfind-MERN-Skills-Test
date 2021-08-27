import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const DaoPage = () => {
  const { id } = useParams();
  const [dao, setDao] = useState({});

  useEffect(() => {
    (async () => {
      const {
        data: [daoData],
      } = await axios.get(`/dao/${id}`);

      setDao(daoData);
    })();
  }, [id]);

  return (
    <Grid
      item
      container
      xs={10}
      style={{
        border: '1px solid lightgrey',
      }}
    >
      This is the DAo Page: {dao.full_name}
    </Grid>
  );
};

export default DaoPage;
