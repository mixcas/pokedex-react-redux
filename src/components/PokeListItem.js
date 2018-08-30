import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import jsConvert from 'js-convert-case';

const styles = theme => ({
  card: {
    width: '100%',
  },
  cardActions: {
    textAlign: 'right',
  }
});

const PokeListItem = ({pokemon, classes}) =>  (
  <Grid key={pokemon.name} item xs={6} sm={4} md={3}>
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant='headline' component='h2'>
          {jsConvert.toHeaderCase(pokemon.name)}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button component={Link} size='small' to={`/${pokemon.name}`} color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

export default withStyles(styles)(PokeListItem);
