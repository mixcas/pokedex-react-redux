import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import { fetchPokemons } from '../actions/PokemonsActions';

//Components
import PokeList from '../components/PokeList';

class PokeListContainer extends Component {
	componentDidMount() {
    const { search } = this.props;
		this.props.fetchPokemons(search);
	}

	render() {
		const { isFetching, pokemonList } = this.props;

		if(isFetching) {
			return <p>Loading...</p>
		}
		return <PokeList pokemonList={pokemonList} />
	}
}

const mapStateToProps = state => ({
	isFetching: state.pokemonList.isFetching,
	pokemonList: state.pokemonList,
  search: state.router.location.search,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchPokemons,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PokeListContainer);
