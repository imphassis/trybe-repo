const dog = require('../src/exercise_6');

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

describe('Mocking dogPictures', () => {
  const dogAPI = jest.fn().mockResolvedValue('Request Success!');
  it('Testing with request success', async () => {
    await dogAPI(apiUrl);
    expect(dogAPI(apiUrl)).resolves.toBe('Request Success!');
  });

  it('Testing with request fail', async () => {
    dogAPI.mockRejectedValue('Request Failed!');
    expect(dogAPI()).rejects.toMatch('Request Failed!');
  });
});
