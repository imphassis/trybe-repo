const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((el) => el.name === name);
      if (arrayAnimals.length > 0) {
        return resolve(arrayAnimals[0]);
      }
      return reject(`Nenhum animal com esse nome!`);
    }, 500);
  });

const getAnimal = async (name) => {
  const animalObj = await findAnimalByName(name);
  return animalObj;
};

const findAnimalbyAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((el) => el.age === age);
      if (arrayAnimals.length > 0) {
        return resolve(arrayAnimals[0]);
      }
      return reject('Nenhum animal com essa idade!');
    }, 500);
  });

const getAge = async (age) => {
  const animalAge = await findAnimalbyAge(age);
  return animalAge;
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Quando existe o animal com a idade procurada', () => {
  it('Retorne o objeto do animal', async () => {
    expect.assertions(1);
    const animal = await getAge(5);
    return expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
  });
  it('Retorne o erro se não tiver o animal com a idade específica', async () => {
    expect.assertions(1);
    try {
      const animal = await getAge(7);
    } catch (error) {
      return expect(error).toEqual('Nenhum animal com essa idade!');
    }
  });
});
