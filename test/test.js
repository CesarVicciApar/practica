// test/test.js

import { expect } from 'chai';
import { add, multiply } from '../math.js';

describe('Math Functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).to.equal(6);
  });
});
