import './App.css';
import PeopInfo from './Components/InfoPessoal';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.saveSub = this.saveSub.bind(this)

    this.State = {

    }
  }

  saveSub(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })

    event.preventDefault();
  }

  render() {
    const { saveSub } = this
    return (
      <div>
        <form>
          <PeopInfo saveSub={saveSub} />
          <button type="submit" > Submit </button>
        </form>
      </div>
    );
  }
}


