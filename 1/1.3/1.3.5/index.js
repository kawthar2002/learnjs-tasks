describe('Возводит x в степень n', () => {
  it('5 ^ 1 = 5', () => {
    assert.equal(pow(5, 1), 5);
  });

  it('5 ^ 2 = 25', () => {
    assert.equal(pow(5, 2), 25);
  });

  it('5 ^ 3 = 125', () => {
    assert.equal(pow(5, 3), 125);
  });
});
