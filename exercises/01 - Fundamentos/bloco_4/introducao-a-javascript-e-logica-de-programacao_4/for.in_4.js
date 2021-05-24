/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
let infoMargarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
infoMargarida.recorrente = 'Sim';

for (const i in infoMargarida) {
  console.log(infoMargarida[i]);
}
