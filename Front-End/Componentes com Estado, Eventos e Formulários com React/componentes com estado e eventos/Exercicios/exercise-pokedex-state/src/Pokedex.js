import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
constructor(){
    super()
    this.changePokemonPlus = this.changePokemonPlus.bind(this)

    this.state = {
        index: 0
        // pokelist:{}
    }
}

changePokemonPlus(){
  const { index } = this.state
  const pokemon = this.props.pokemons

    if (index < pokemon.length-1){
    this.setState((stateA, _props) =>({
        index: stateA.index + 1 
    }))
    }
    else {
        this.setState({index: 0})
    }
}

    render() {
        const pokemon = this.props.pokemons

        return (
            <div className="pokedex">
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                <Pokemon key={pokemon[this.state.index].id} pokemon={pokemon[this.state.index]}/>
            <button type='button' onClick={this.changePokemonPlus}> + </button>
            <form>
            <label>
            Electric
              <input type= "radio" name='Element' value='Electric' />
            </label>
            <label>
            Fire
             <input type= "radio" name='Element' value='Fire'/>
             </label>
             <label>
             Psychic
             <input type= "radio" name='Element' value='Psychic'/>
             </label>
            </form>
            </div>
        );
    }
}

export default Pokedex;