function calcRanked(win, loses) {
  let saldoWin = win - loses;
  let elo;

  if (saldoWin <= 10) {
    elo = 'Ferro';
  } else if (saldoWin <= 20) {
    elo = 'Bronze';
  } else if (saldoWin <= 50) {
    elo = 'Prata';
  } else if (saldoWin <= 80) {
    elo = 'Ouro';
  } else if (saldoWin <= 90) {
    elo = 'Diamante';
  } else if (saldoWin <= 100) {
    elo = 'Lendário';
  } else {
    elo = 'Imortal';
  }

  console.log(`O Herói tem saldo de ${saldoWin} está no nível de ${elo}`);
}

calcRanked(63, 12);
