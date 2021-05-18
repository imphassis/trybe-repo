const encdec = require('../../src/PlaygroundRef/encode&decode');

describe('Checking Encode and Decode Functions', () => {
  it('Check if encode and decode are functions', () => {
    expect(typeof encdec.encode && typeof encdec.decode).toBe('function');
  });
  it('For the function Encode, test if the vogals are converted to numbers', () => {
    expect(encdec.encode('aeiou')).toEqual('12345');
  });
  it('For the function Decode, test if the numbers are converted to vogals', () => {
    expect(encdec.decode('12345')).toEqual('aeiou');
  });
  it('Check if others letters are not converted', () => {
    expect(encdec.encode('aeiourstuv')).toEqual('12345rstuv');
  });
  it('Check if the converted string has the same length as the original one', () => {
    const toConvert = 'aeiourstuwv';
    expect(encdec.encode(toConvert)).toHaveLength(toConvert.length);
  });
});
