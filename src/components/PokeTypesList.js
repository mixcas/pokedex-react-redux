import React from 'react';
import Typography from '@material-ui/core/Typography';
import jsConvert from 'js-convert-case';

const PokeTypesList = types => {
  return (
    <Typography gutterBottom variant='subheading' component='h3'>
      {types.map( (type, index, thisArray) =>  {
        const isLast = index === thisArray.length - 1 ? true : false;
        return `${jsConvert.toHeaderCase(type.type.name)}${isLast ? '' : ', '}`;
      })}
    </Typography>
  );
}

export default PokeTypesList;
