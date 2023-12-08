const getData = require('./getData.js');
const axios = require('axios');
const mockData = require('./mockData.js');

jest.mock('axios');

describe('getData', () => {
  let response;

  beforeEach(() => {
    response = { data: mockData };
  });

  test('corrent value', async () => {
    axios.get.mockReturnValue(response);
    const data = await getData();

    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(['1', '2', '3']);
  });
});
