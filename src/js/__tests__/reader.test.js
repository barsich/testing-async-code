import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('read() rejected', async () => {
  await expect(read('123')).resolves;
});

test('read() rejected', async () => {
  await expect(read(123)).rejects.toThrowError('error');
});
