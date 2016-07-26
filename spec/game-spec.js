describe('Game start',() => {
  it("should print 'congratulations' when input correctly during times",() => {
    spyOn(console,'log');
    expect(console.log()).toHaveBeenCalledWith('congratulations');
  });
});
