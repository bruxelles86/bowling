describe("Roll", function() {
  it('knocks down a random number of remaining pins', function() {
    expect(Roll(10) >= 0 && Roll(10) <= 10).toBeTruthy();
  });
});
