import React, { useState, useEffect } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';
const headers = ['Name', 'Category', 'AUM', 'Year Founded', 'Blockchain'];

const TableHeaders = ({ setAllDaos }) => {
  const [sortBy, setSortBy] = useState({ by: '', direction: '' });

  useEffect(() => {
    ((sort) => {
      const sortFunc = () => {
        const columns = {
          Name: 'full_name',
          Category: 'category',
          AUM: 'aum',
          'Year Founded': 'date_founded',
          Blockchain: 'blockchain',
        };
        setAllDaos((daos) => {
          return [...daos].sort((a, b) => {
            a =
              sort === 'Name'
                ? a[columns[sort]].toLowerCase()
                : a[columns[sort]];
            b =
              sort === 'Name'
                ? b[columns[sort]].toLowerCase()
                : b[columns[sort]];

            const order = sortBy.direction === 'asc' ? a < b : a > b;
            return order ? -1 : 1;
          });
        });
      };

      return sort ? sortFunc() : null;
    })(sortBy.by);
  }, [sortBy, setAllDaos]);

  const handleSetSortBy = (sort) => {
    setSortBy(() => {
      if (sortBy.by === sort) {
        const direction = sortBy.direction === 'asc' ? 'desc' : 'asc';
        return { by: sort, direction };
      } else {
        return { by: sort, direction: 'asc' };
      }
    });
  };

  return (
    <>
      <TableCell />
      <TableCell />
      {headers.map((header) => {
        return (
          <TableCell align="center" key={header}>
            <TableSortLabel
              active={header === sortBy}
              onClick={handleSetSortBy.bind(this, header)}
            >
              {header}
            </TableSortLabel>
          </TableCell>
        );
      })}
    </>
  );
};

export default TableHeaders;
