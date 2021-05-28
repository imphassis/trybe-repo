const techList = (ability, name) => {
  const ordered = ability.sort();
  abilityList = ordered.map((el, i, array) => (array[i] = { tech: el, name }));
  if (ability.length > 0) {
    return abilityList;
  } else {
    return 'Vazio!';
  }
};

module.exports = techList;
