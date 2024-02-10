import { cutUserName, generateUserTitle } from './utils';

describe('testing function generateUserTitle', () => {
  it('run and recive success ak', () => {
    const value = generateUserTitle('andrey kishtov');
    expect(value).toBe('ak');
  });

  it('give null and return null', () => {
    const value = generateUserTitle(null);
    expect(value).toBe(null);
  });

  it('give empty string and return null', () => {
    const value = generateUserTitle('');
    expect(value).toBe(null);
  });

  it('give number and return null', () => {
    const value = generateUserTitle(1);
    expect(value).toBe(null);
  });
});

describe('testing function cutUserName ', () => {
  it('run and recive success Mila Savonik', () => {
    const value = cutUserName('Mila Savonik');
    expect(value).toBe('Mila Savonik');
  });

  it('sould cut full name after middle name', () => {
    const value = cutUserName('Mila Savonik Kishtov');
    expect(value).toBe('Mila Savonik');
  });

  it('should handle full name with extra space', () => {
    const value = cutUserName(' Mila Savonik ');
    expect(value).toBe('Mila Savonik');
  });

  it('should return name', () => {
    const value = cutUserName('Mila');
    expect(value).toBe('Mila');
  });

  it('give null and return null', () => {
    const value = cutUserName(null);
    expect(value).toBe(null);
  });

  it('give empty string and return null', () => {
    const value = cutUserName('');
    expect(value).toBe(null);
  });

  it('give number and return null', () => {
    const value = cutUserName(1);
    expect(value).toBe(null);
  });
});
