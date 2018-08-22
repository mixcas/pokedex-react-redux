import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PokeListItem from './PokeListItem';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	card: {
		width: '100%',
	},
	cardActions: {
		textAlign: 'right',
	}
});

const PokeList = props => {
	const { classes, pokemonList } = props;
	const { results } = pokemonList;
	return (
		<Grid container className={classes.Root} spacing={24} justify={'space-around'}>
			{results.map(value => (
				<PokeListItem pokemon={value} key={value.name} />
			))}
		</Grid>
	);
}

export default withStyles(styles)(PokeList);
