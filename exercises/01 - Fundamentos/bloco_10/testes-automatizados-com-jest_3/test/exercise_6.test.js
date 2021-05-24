const dog = require('../src/exercise_6');

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

dog.dogAPI;

describe('Mocking dogPictures', () => {
  dog.dogAPI = jest.fn();
  afterEach(dog.dogAPI.mockReset);
  it('Testing with request success', async () => {
    dog.dogAPI.mockResolvedValue('Request Success!');
    await dog.dogAPI(apiUrl);
    expect(dog.dogAPI).toHaveBeenCalled();
    expect(dog.dogAPI(apiUrl)).resolves.toBe('Request Success!');
    expect(dog.dogAPI).toHaveBeenCalledTimes(2);
  });

  it('Testing with request fail', async () => {
    dog.dogAPI.mockRejectedValue('Request Failed!');
    expect(dog.dogAPI()).rejects.toMatch('Request Failed!');
  });
});
