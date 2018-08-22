import React from 'react';
import Typography from '@material-ui/core/Typography';
import jsConvert from 'js-convert-case';

const PokeName = name => (
	<Typography gutterBottom variant='headline' component='h2'>
		{jsConvert.toHeaderCase(name)}
	</Typography>
);

export default PokeName;
