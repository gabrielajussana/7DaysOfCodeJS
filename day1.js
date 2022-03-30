let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if(numeroUm == stringUm){
  console.log('As variáveis %d e %s tem o mesmo valor, mas tipos diferentes', numeroUm, stringUm)
} else {
  console.log ('As variáveis %d e %s não tem o mesmo valor', numeroUm, stringUm )
}

if(numeroTrinta === stringTrinta){
  console.log('As variáveis %d e %s tem o mesmo valor e mesmo tipo ', numeroTrinta, stringTrinta)
} else {
  console.log ('As variáveis %d e %s não tem o mesmo tipo', numeroTrinta, stringTrinta)
}

if(numeroDez == stringDez){
  console.log('As variáveis %d e %s tem o mesmo valor, mas tipos diferentes', numeroDez, stringDez)
} else {
  console.log ('As variáveis numeroDez e %s não tem o mesmo valor', numeroDez, stringDez )
}
