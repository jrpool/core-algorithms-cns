import { expect } from 'chai';
import setComplement from '../../src/Set/setComplement';

describe('setComplement', function() {

  it('is a function', function() {
    expect(setComplement).to.be.a('function');
  });

  context('valid arguments', function() {

    it('correct when given identical arrays', function() {
      expect(setComplement([1, 2, 3], [1, 2, 3])).to.eql([]);
    });

    it('correct when given permuted identical arrays', function() {
      expect(setComplement([1, 2, 3], [2, 3, 1])).to.eql([]);
    });

    it('correct when given disjoint arrays', function() {
      expect(setComplement([1, 2, 3], [4, 5, 6])).to.eql([4, 5, 6]);
    });

    it('correct when given partly disjoint arrays', function() {
      expect(setComplement([1, 2, 3, 4], [4, 5, 6])).to.eql([5, 6]);
    });

    it('correct when given type-heterogeneous arrays', function() {
      expect(setComplement([1, '2', [3], 4], [1, 3, {a: 4}, 5, 6]))
        .to.eql([3, {a: 4}, 5, 6]);
    });

    it('correct when given an empty and a nonempty array', function() {
      expect(setComplement([], [1, 2, 3])).to.eql([1, 2, 3]);
    });

    it('correct when given a nonempty and an empty array', function() {
      expect(setComplement([1, 2, 3], [])).to.eql([]);
    });

    it('correct when given 2 empty arrays', function() {
      expect(setComplement([], [])).to.eql([]);
    });

    it('correct when given arrays containing equivalent arrays', function() {
      expect(setComplement([1, ['a', 'b'], 3], [3, ['a', 'b']]))
        .to.eql([['a', 'b']]);
    });

    it('correct when given arrays containing identical arrays', function() {
      const array = ['a', 'b'];
      expect(setComplement([1, array, 2], [1, array, 2])).to.eql([]);
    });

    it('correct when given arrays with repeated elements', function() {
      expect(setComplement([1, 2, 3, 1], [2, 2, 4, 2])).to.eql([4]);
    });

  });

  context('invalid arguments', function() {

    it('undefined when the argument count is 1', function() {
      expect(setComplement([1, 2, 3])).to.be.undefined;
    });

    it('undefined when the argument count is 0', function() {
      expect(setComplement()).to.be.undefined;
    });

    it('undefined when the argument count is 3', function() {
      expect(setComplement([1, 2, 3], ['a'], [])).to.be.undefined;
    });

    it('undefined when either argument is not an array', function() {
      expect(setComplement(['hello'], 'there')).to.be.undefined;
    });

  });

});
