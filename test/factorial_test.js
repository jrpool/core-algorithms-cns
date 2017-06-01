import { expect } from 'chai';
import factorial from '../src/factorial';

describe('factorial', function() {

  it('is a function', function() {
    expect(factorial).to.be.a('function');
  });

  context('valid arguments', function() {

    it('correct when given a small positive integer', function() {
      expect(factorial(7)).to.equal(5040);
    });

    it('correct when given a larger positive integer', function() {
      expect(factorial(15)).to.equal(1307674368000);
    });

    it('correct when given 1', function() {
      expect(factorial(1)).to.equal(1);
    });

  });

  context('invalid arguments', function() {

    it('undefined when the argument is not a number', function() {
      expect(factorial('5')).to.be.undefined;
    });

    it('undefined when the argument is not an integer', function() {
      expect(factorial(5.34)).to.be.undefined;
    });

    it('undefined when the argument is 0', function() {
      expect(factorial(0)).to.be.undefined;
    });

    it('undefined when the argument is negative', function() {
      expect(factorial(-4)).to.be.undefined;
    });

    it('undefined when the argument is infinity', function() {
      expect(factorial(Infinity)).to.be.undefined;
    });

    it('undefined when there is no argument', function() {
      expect(factorial()).to.be.undefined;
    });

    it('returns undefined when there are multiple arguments', function() {
      expect(factorial(13, 2)).to.be.undefined;
    });

  });

});
