import React, { useEffect, useState } from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { useHistory } from 'react-router-dom';
import './DaoPreview.css';
import { Typography } from '@material-ui/core';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Collapse,
  Box,
} from '@material-ui/core';
import StringifyNum from '../../StringifyNum';

const DaoPreview = ({ dao, open }) => {
  const history = useHistory();
  const [tvl, setTvl] = useState();

  useEffect(() => {
    setTvl(StringifyNum(dao.TVL));
  }, [dao]);

  const handleDaoClick = (id, e) => {
    history.push(`/dao/${id}`);
  };

  return (
    <>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box margin={3}>
          <Table
            style={{ border: '1px solid lightgrey', marginBottom: '10px' }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography>Dao Description</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Total Value Locked(TVL)</Typography>
                </TableCell>
                <TableCell>
                  <OpenInNewIcon
                    onClick={handleDaoClick.bind(this, dao._id)}
                    id="previewIcon"
                  />
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
                  <Typography align="center">{tvl}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table style={{ border: '1px solid lightgrey' }}>
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
                <Typography>{dao.governance_token_symbol}</Typography>{' '}
              </TableCell>

              <TableCell>
                <Typography>{dao.full_name}</Typography>{' '}
              </TableCell>

              <TableCell>
                <Typography>{dao.blockchain}</Typography>{' '}
              </TableCell>

              <TableCell>
                <Typography>{dao.headquarters || 'N/A'}</Typography>{' '}
              </TableCell>

              <TableCell>
                <Typography>{dao.date_founded}</Typography>{' '}
              </TableCell>
            </TableBody>
          </Table>
        </Box>
      </Collapse>
    </>
  );
};

export default DaoPreview;
