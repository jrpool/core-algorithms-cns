import { expect } from 'chai';
import fibonacci from '../src/fibonacci';

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
