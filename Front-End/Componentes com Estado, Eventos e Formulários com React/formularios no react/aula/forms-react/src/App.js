import './App.css';
import React, { Component } from 'react';
import InfoPoke from './components/infoPoke';
import AreaInfo from './components/areaDeInfo';


export default class form extends Component {
  constructor() {
    super()
    this.eventChangeControl = this.eventChangeControl.bind(this)

    this.state = {

    }
  }

  eventChangeControl(event) {
    const { name } = event.target

    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;


    this.setState({
      [name]: value
    })
  }
  render() {
    const { eventChangeControl } = this
    return (
      <section>
        <fieldset>
          <form>
            <InfoPoke eventChanControl={eventChangeControl} />
            <AreaInfo eventChangeControl={eventChangeControl} />
          </form>
        </fieldset >
      </section >
    )
  }
}
