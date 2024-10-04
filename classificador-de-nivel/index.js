let exp = 10001;
let hero = 'Rosael';
let elo;

if (exp <= 1000) {
  elo = 'Ferro';
} else if (exp <= 2000) {
  elo = 'Bronze';
} else if (exp <= 5000) {
  elo = 'Prata';
} else if (exp <= 7000) {
  elo = 'Ouro';
} else if (exp <= 8000) {
  elo = 'Platina';
} else if (exp <= 9000) {
  elo = 'Ascendente';
} else if (exp <= 10000) {
  elo = 'Imortal';
} else {
  elo = 'Radiante';
}

console.log(`O Herói de nome ${hero} está no nível de ${elo}`);