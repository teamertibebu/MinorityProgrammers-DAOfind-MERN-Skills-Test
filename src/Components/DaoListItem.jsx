import React, { useState, useEffect } from 'react';

const DaoListItem = ({ dao }) => {
  console.log('LIST ITEM: ', dao);
  return (
    <div>
      <img src={dao.logo_link} style={{ width: '4%' }} />
      <p>Category: {dao.category}</p>
      <p>AUM: {dao.aum}</p>
      <p>Founded: {dao.date_founded}</p>
    </div>
  );
};

export default DaoListItem;
