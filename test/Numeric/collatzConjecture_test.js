import { expect } from 'chai';
import collatzConjecture from '../../src/Numeric/collatzConjecture';

describe('collatzConjecture', function() {

  it('is a function', function() {
    expect(collatzConjecture).to.be.a('function');
  });

  context('valid arguments', function() {

    it('correct when given a small positive integer', function() {
      expect(collatzConjecture(7)).to.eql(
        [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
      );
    });

    it('correct when given a larger positive integer', function() {
      expect(collatzConjecture(15)).to.eql(
        [15, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
      );
    });

  });

  context('invalid arguments', function() {

    it('undefined when the argument is not a number', function() {
      expect(collatzConjecture('5')).to.be.undefined;
    });

    it('undefined when the argument is not an integer', function() {
      expect(collatzConjecture(5.34)).to.be.undefined;
    });

    it('undefined when the argument is 0', function() {
      expect(collatzConjecture(0)).to.be.undefined;
    });

    it('undefined when the argument is negative', function() {
      expect(collatzConjecture(-4)).to.be.undefined;
    });

    it('undefined when the argument is infinity', function() {
      expect(collatzConjecture(Infinity)).to.be.undefined;
    });

    it('undefined when there is no argument', function() {
      expect(collatzConjecture()).to.be.undefined;
    });

    it('returns undefined when there are multiple arguments', function() {
      expect(collatzConjecture(13, 2)).to.be.undefined;
    });

  });

});
