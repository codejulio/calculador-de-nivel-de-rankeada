let saldoDeVitoria = resultado(145, 38); 
let nivel

function resultado(vitoria, derrota) {
  return vitoria - derrota;
}

if (saldoDeVitoria < 10){
  nivel = "Ferro"
}else if (saldoDeVitoria >=11 && saldoDeVitoria <=20){
nivel = "Bronze"
}else if (saldoDeVitoria >=21 && saldoDeVitoria <=50){
  nivel = "Prata"
}else if (saldoDeVitoria >=51 && saldoDeVitoria <=80){
  nivel = "Ouro"
}else if (saldoDeVitoria >=81 && saldoDeVitoria <=90){
  nivel = "Diamante"
}else if (saldoDeVitoria >=91 && saldoDeVitoria <=100){
  nivel = "Lendário"
}else if (saldoDeVitoria >=101){
  nivel = "Imortal"
}

console.log("O Héroi tem um saldo de vitórias de " + saldoDeVitoria + " e está no nível " + nivel);