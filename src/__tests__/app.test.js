
import testFunction from '../index.js';

describe("Making sure it works", () => {
  it("should sum 1 plus 1", () => {
    expect(testFunction('input')).toEqual('input');
  });
});