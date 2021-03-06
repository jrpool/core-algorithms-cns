import { expect } from 'chai';
import makeChange from '../../src/Classic/makeChange';

describe('makeChange', function() {

  it('is a function', function() {
    expect(makeChange).to.be.a('function');
  });

  context('valid arguments', function() {

    it(
      'returns correct result when price is 333 and amountGiven is 333', function() {
        expect(makeChange({price: 333, amountGiven: 333})).to.eql(
          {
            'dollars': 0,
            'half-dollars': 0,
            'quarters': 0,
            'dimes': 0,
            'nickels': 0,
            'pennies': 0
          }
        );
      }
    );

    it(
      'returns correct result when price is 102 and amountGiven is 500', function() {
        expect(makeChange({price: 102, amountGiven: 500})).to.eql(
          {
            'dollars': 3,
            'half-dollars': 1,
            'quarters': 1,
            'dimes': 2,
            'nickels': 0,
            'pennies': 3
          }
        );
      }
    );

    it(
      'returns correct result when price is 9999 and amountGiven is 10000', function() {
        expect(makeChange({price: 9999, amountGiven: 10000})).to.eql(
          {
            'dollars': 0,
            'half-dollars': 0,
            'quarters': 0,
            'dimes': 0,
            'nickels': 0,
            'pennies': 1
          }
        );
      }
    );

  });

  context('invalid arguments', function() {

    it('returns undefined when there are multiple arguments', function() {
      expect(makeChange({price: 102, amountGiven: 500}, true)).to.be.undefined;
    });

    it('returns undefined when given a nonobject argument', function() {
      expect(makeChange('price: 102, amountGiven: 500')).to.be.undefined;
    });

    it('returns undefined when given only price', function() {
      expect(makeChange({price: 333})).to.be.undefined;
    });

    it('returns undefined when given only amountGiven', function() {
      expect(makeChange({amountGiven: 500})).to.be.undefined;
    });

    it(
      'returns undefined when given neither price nor amountGiven',
      function() {
        expect(makeChange({})).to.be.undefined;
      }
    );

    it('returns undefined when given an extraneous property', function() {
      expect(makeChange({price: 333, amountGiven: 500, limit: 1000}))
        .to.be.undefined;
    });

    it('returns undefined when there is a misnamed property', function() {
      expect(makeChange({price: 333, amountTendered: 500}))
        .to.be.undefined;
    });

    it('returns undefined when price is not a number', function() {
      expect(makeChange({price: '333', amountGiven: 500})).to.be.undefined;
    });

    it('returns undefined when amountGiven is not a number', function() {
      expect(makeChange({price: 333, amountGiven: [500]})).to.be.undefined;
    });

    it('returns undefined when price is not an integer', function() {
      expect(makeChange({price: '333.5', amountGiven: 500})).to.be.undefined;
    });

    it('returns undefined when amountGiven is not an integer', function() {
      expect(makeChange({price: '333', amountGiven: 500.5})).to.be.undefined;
    });

    it('returns undefined when amountGiven < price', function() {
      expect(makeChange({price: 1333, amountGiven: 500})).to.be.undefined;
    });

    it('returns undefined when price is negative', function() {
      expect(makeChange({price: -40, amountGiven: 50})).to.be.undefined;
    });

    it('returns undefined when amountGiven is infinite', function() {
      expect(makeChange({price: 999995, amountGiven: Infinity}))
        .to.be.undefined;
    });

  });

});
