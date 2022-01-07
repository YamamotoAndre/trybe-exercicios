import React, { Component } from 'react';
import './App.css';


export default class App extends Component {

  constructor() {
    super()
    this.handClick1 = this.handClick1.bind(this)
    this.handClick2 = this.handClick2.bind(this)
    this.handClick3 = this.handClick3.bind(this)
    this.changecolor1 = this.changecolor1.bind(this)
    this.changecolor2 = this.changecolor2.bind(this)
    this.changecolor3 = this.changecolor3.bind(this)
      
    this.state = {
      numClickB1:0,
      numClickB2:0,
      numClickB3:0,
      color1: 'numPar',
      color2: 'numPar',
      color3: 'numPar',
    }
  }

handClick1(){
  this.setState((stateA, _props) =>({
    numClickB1: stateA.numClickB1 + 1
  }))
  this.changecolor1()
};

handClick2(){
   this.setState((stateA, _props) =>({
    numClickB2: stateA.numClickB2 + 1
  }))
  this.changecolor2()
};

handClick3(){
  this.setState((stateA, _props) =>({
    numClickB3: stateA.numClickB3 + 1
  }))
  this.changecolor3()
};

changecolor1(){
  const {numClickB1} = this.state
  if (numClickB1 % 2 === 0) {
    this.setState({color1:'numImpar',})
    console.log ('B1 vermelho')
    this.forceUpdate()
  }else{
    this.setState({color1:'numPar',})
    console.log ('B1 verde')
    this.forceUpdate()
  }
}

changecolor2(){
  const {numClickB2} = this.state
  if (numClickB2 % 2 === 0) {
    this.setState({color2:'numImpar',})
    console.log ('B2 vermelho')
    this.forceUpdate()
  }else{
    this.setState({color2:'numPar',})
    console.log ('B2 verde')
    this.forceUpdate()
  }
}
changecolor3(){
  const {numClickB3} = this.state
  if (numClickB3 % 2 === 0) {
    this.setState({color3:'numImpar',})
    console.log ('B3 vermelho')
    this.forceUpdate()
  }else{
    this.setState({color3:'numPar',})
    console.log ('B3 verde')
    this.forceUpdate()
  }
}

  render(){
    const {handClick1, handClick2, handClick3} = this
    const {numClickB1, numClickB2, numClickB3} = this.state
    const {color1, color2, color3} = this.state

    return (
      <div>
      <p>O botão 1 </p>
      <button type='button' onClick={handClick1} value={numClickB1} className={color1}> {numClickB1} clicks</button>
      <p>O botão 2 </p>
      <button type='button' onClick={handClick2} value={numClickB2} className={color2}> {numClickB2} clicks</button>
      <p>O botão 3 </p>
      <button type='button' onClick={handClick3} value={numClickB3} className={color3}> {numClickB3} clicks</button>
    </div>
  )
  }
}
