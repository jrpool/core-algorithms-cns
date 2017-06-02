import { expect } from 'chai';
import fibonacci from '../../src/Numeric/fibonacci';

describe('fibonacci', function() {

  it('is a function', function() {
    expect(fibonacci).to.be.a('function');
  });

  context('valid arguments', function() {

    it('correct when given a small positive integer', function() {
      expect(fibonacci(7)).to.eql([0, 1, 1, 2, 3, 5, 8]);
    });

    it('correct when given a larger positive integer', function() {
      expect(fibonacci(15)).to.eql(
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
      );
    });

    it('correct when given a large positive integer', function() {
      expect(fibonacci(50)).to.eql(
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049]
      );
    });

  });

  context('invalid arguments', function() {

    it('undefined when the argument is not a number', function() {
      expect(fibonacci('5')).to.be.undefined;
    });

    it('undefined when the argument is not an integer', function() {
      expect(fibonacci(5.34)).to.be.undefined;
    });

    it('undefined when the argument is 0', function() {
      expect(fibonacci(0)).to.be.undefined;
    });

    it('undefined when the argument is negative', function() {
      expect(fibonacci(-4)).to.be.undefined;
    });

    it('undefined when the argument is infinity', function() {
      expect(fibonacci(Infinity)).to.be.undefined;
    });

    it('undefined when there is no argument', function() {
      expect(fibonacci()).to.be.undefined;
    });

    it('returns undefined when there are multiple arguments', function() {
      expect(fibonacci(13, 2)).to.be.undefined;
    });

  });

});
