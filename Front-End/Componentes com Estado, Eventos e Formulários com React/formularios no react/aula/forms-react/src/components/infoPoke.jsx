import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class InfoPoke extends Component {
 
  render() {
    const { eventChanControl } = this.props
    return (
      <div>
        <div>
          <h1>
            Pokedex
          </h1>
        </div>
        <div>
            <label>
              Tipo do Pokemon
            </label>
            <div>
              <select
                name='typePoke'
                onChange={eventChanControl}>
                <option value='fire'>
                  fire
                </option>
                <option value='eletric'>
                  eletric
                </option>
                <option value='water'>
                  water
                </option>
              </select>
            </div>
            <div>
              <label>
                Numeno do Pokemon
                <input type='number'
                  onChange={eventChanControl}
                  name='numPoke'
                  min={0}
                  max={151} />
              </label>
            </div>
            <div>
              <label>
                Nome do Pokemon
                <input
                  type={'text'}
                  name='PokeName'
                  onChange={eventChanControl}
                />
              </label>
            </div>
            <div>
              <label>
                shyne
                <input type={'checkbox'}
                  name='Shyne'
                  onChange={eventChanControl} />
              </label>
            </div>
        </div>
      </div>
        )
  }
};

InfoPoke.protoType = {
  eventChanControl : PropTypes.func.isRequired
}