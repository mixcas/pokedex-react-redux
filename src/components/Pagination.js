import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = theme => ({
	item: {
		textAlign: 'center',
	},
});

const getSearchString = url => {
  const parsedUrl = new URL(url);
  return parsedUrl.search;
}

const Pagination = ({next, previous, classes, fetchPokemons}) =>  (
	<Grid container className={classes.Root} spacing={16}>
    <Grid item xs={6} className={classes.item}>
			{ previous ? <Button component={Link} to={getSearchString(previous)} variant="fab" mini color="secondary" aria-label="Add">
				<ChevronLeftIcon />
			</Button> : null }
		</Grid>
    <Grid item xs={6} className={classes.item}>
			{ next ? <Button component={Link} to={getSearchString(next)} variant="fab" mini color="secondary" aria-label="Add">
				<ChevronRightIcon />
			</Button> : null }
		</Grid>
	</Grid>
);

export default withStyles(styles)(Pagination);
