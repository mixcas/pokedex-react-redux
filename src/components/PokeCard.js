import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import jsConvert from 'js-convert-case';

import PokeTypesList from './PokeTypesList';
import PokeAbilities from './PokeAbilities';
import PokeName from './PokeName';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	card: {
		width: '100%',
	},
	avatar: {
		margin: 10,
	},
	bigAvatar: {
		width: 60,
		height: 60,
	},
});

const PokeCard = (props) => {
	const { info, classes } = props;

	return (
		<Grid container className={classes.Root} spacing={16} justify={'center'}>
			<Grid item xs={12} sm={10} md={8}>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Avatar
								aria-label={info.name}
								alt={jsConvert.toHeaderCase(info.name)}
								src={info.sprites.front_default}
								className={classnames(classes.avatar, classes.bigAvatar)}
							/>
						}
						title={PokeName(info.name)}
						subheader={PokeTypesList(info.types)}
					/>
					<CardContent>
						<PokeAbilities abilities={info.abilities} />
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(PokeCard);
