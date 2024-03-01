const { currentIntensity, todayIntensity } = require('../utils/utils');


describe('Intensity endpoints', () => {
  test('current intensity data', async () => {
    const data = await currentIntensity();
    expect(data).toMatchObject({
      forecast: expect.any(Number),
      actual: expect.any(Number),
      index: expect.any(String),
    });
  })

  test('todays intensity data', async () => {
    const data = await todayIntensity();
    expect(data).toBeInstanceOf(Array);
    expect(data).toHaveLength(48);
  })
});
