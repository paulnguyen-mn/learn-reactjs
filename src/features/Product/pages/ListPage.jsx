import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const response = await productApi.getAll({ _page: 1, _limit: 10 });
      console.log({ response });
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>Right column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
