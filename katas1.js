function oneThroughTwenty() {
    
  let listaNumerica = [];
  
  for (let i = 1; i <= 20; i++) {

    listaNumerica.push(i)
  }
    return listaNumerica;
}

console.log(oneThroughTwenty());


function evensToTwenty() {

  let listaPar = [];

  for (let i = 1; i <=20; i++) {

      if( i % 2 === 0)
      listaPar.push(i)
  }
    return listaPar;
}

console.log(evensToTwenty());


function oddsToTwenty() {

  let listaImpar = [];

  for (let i = 1; i <=20; i++) {
    
    if( i % 2 === 1)
    listaImpar.push(i)
  }
    return listaImpar;
}
  console.log(oddsToTwenty());

function multiplesOfFive() {
    
  let multiplosDeCinco =  [];

  for (let i = 5; i<= 100; i++) {
    
    if( i % 5 === 0)
    multiplosDeCinco.push(i)
  }
    return multiplosDeCinco;
}
  console.log(multiplesOfFive());


function squareNumbers() {

  let numerosAoQuadrado = [];

  for (let i = 1; i <=10; i++) {
  
    numerosAoQuadrado.push(i*i)  
  }
return numerosAoQuadrado;
}

console.log(squareNumbers());


function countingBackwards() {
    
  let listaNumerica = [];
  
  for (let i = 20; i >=1; i--) {

    listaNumerica.push(i)
  }
    return listaNumerica;

}
console.log(countingBackwards());


function evenNumbersBackwards() {

    let listaParAoContrario = [];
  
    for (let i = 20; i >=1; i--) {

      if(i % 2 === 0)
      listaParAoContrario.push(i)
    }
      return listaParAoContrario;
}

console.log(evenNumbersBackwards());


function oddNumbersBackwards() {

  let listaImparAoContrario = [];
  
  for (let i = 20; i >=1; i--) {

    if( i % 2 == 1)
    listaImparAoContrario.push(i)
  }
    return listaImparAoContrario;
}
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
    
  let multiplosDeCincoAoContrario =  [];

  for (let i = 100; i >=5; i--) {
    
    if( i % 5 === 0)
    multiplosDeCincoAoContrario.push(i)
  }
    return multiplosDeCincoAoContrario;
}
  console.log(multiplesOfFiveBackwards());


function squareNumbersBackwards() {
  
  let numerosAoQuadradoAoContrario = [];

  for (let i = 10; i >= 1; i--) {
  
    numerosAoQuadradoAoContrario.push(i*i)  
  }
  return numerosAoQuadradoAoContrario;
}
  console.log(squareNumbersBackwards())
