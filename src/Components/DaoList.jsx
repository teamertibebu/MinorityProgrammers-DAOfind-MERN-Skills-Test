import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DaoListItem from './DaoListItem';

const DaoList = () => {
  const [allDaos, setAllDaos] = useState([]);
  useEffect(() => {
    axios.get('/daoList').then(({ data }) => {
      setAllDaos(data);
    });
  }, []);

  return (
    <>
      {allDaos.map((dao) => {
        return <DaoListItem dao={dao} />;
      })}
    </>
  );
};

export default DaoList;
