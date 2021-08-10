//exercicio 1
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2, silver: 3
  },
 
};

//exercicio 2
console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + ' ' + 'anos de idade.');

//exercicio 3

 player['bestInTheWorld']= [2006, 2007, 2008, 2009, 2010, 2018],

//exercicio 4
player['fullName'] = player.name + ' ' + player.lastName;

console.log('A jogadora' + ' ' + player.fullName + ' ' + 'foi eleita a melhor do mundo' + ' ' + player.bestInTheWorld.length + ' ' + 'vezes.');

//exercicio 5
console.log('A jogadora possui' + ' '+ player.medals.golden + ' ' +'medalhas de ouro'+' '+player.medals.silver+' '+'medalhas de prata.');


console.table(player);

