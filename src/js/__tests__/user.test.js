import { loadUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should handle errors gracefully', async () => {
    httpGet.mockImplementationOnce(() => {
      throw new Error('Network error');
    });
  
    await expect(loadUser(1)).rejects.toThrow('Network error');
  });