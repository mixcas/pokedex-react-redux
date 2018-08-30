import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import { fetchPokemon } from '../actions/PokemonActions.js';

// Components
import PokeCard from '../components/PokeCard';
import Loading from '../components/Loading';

class PokeInfoContainer extends Component {
  componentDidMount() {
    const { match: { url }} = this.props;

    // Remove slash at the beggining
    const pokemonName = url.substring(1, url.length);

    // Fetch Pokemon
    this.props.fetchPokemon(pokemonName);
  }

  render() {
    const { isFetching, pokemonInfo } = this.props;

    if(isFetching) {
      return <Loading />
    }
    return <PokeCard info={pokemonInfo} />
  }
}

const mapStateToProps = state => ({
  isFetching: state.currentPokemon.isFetching,
  pokemonInfo: state.currentPokemon.info,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeInfoContainer)
