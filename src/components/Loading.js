import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const CircularIndeterminate = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.Root} spacing={16} justify={'center'}>
      <Grid item xs={2}>
        <CircularProgress className={classes.progress} size={50} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CircularIndeterminate);
