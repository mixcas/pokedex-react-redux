import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPokemons } from '../actions/PokemonsActions';
import PokeList from '../components/PokeList';

class PokeListContainer extends Component {
	componentDidMount() {
		this.props.fetchPokemons();
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchPokemons,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PokeListContainer)
