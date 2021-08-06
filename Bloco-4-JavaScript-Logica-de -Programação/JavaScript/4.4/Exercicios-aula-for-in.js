//Exercicio 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for( let saudação in names){
      console.log('Olá'+' '+names[saudação])
  }
//Exercicio 2
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let carInfo in car){
      console.log(carInfo, car[carInfo])
  }