import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import jsConvert from 'js-convert-case';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

const PokeAbilities = ({abilities, classes}) => {
  return (
    <List className={classes.root} subheader={<li />}>
      <li key={'section-header'} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>{'Abilities'}</ListSubheader>
          { abilities.map( (item, index, thisArray) =>  (
            <ListItem key={`item-${index}`}>
              <ListItemText primary={jsConvert.toHeaderCase(item.ability.name)} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
};

export default withStyles(styles)(PokeAbilities);
