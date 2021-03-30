/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const infoMargarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

const infoPatinhas = {
  personagem: 'Tio Patinhas',
  //   prettier-ignore
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

const info = { infoMargarida, infoPatinhas };

for (const key in infoMargarida) {
  if (key !== 'recorrente') {
    console.log(`${infoMargarida[key]} e ${infoPatinhas[key]}`);
  }
}

if (infoMargarida.recorrente === 'Sim' && info.infoPatinhas.recorrente === 'Sim') {
  console.log('Ambos recorrentes');
}
