import { expect } from 'chai';
import _isPalindrome from '../../src/Classic/isPalindrome';

describe('isPalindrome', function() {

  it('is a function', function() {
    expect(_isPalindrome).to.be.a('function');
  });

  context('valid arguments', function() {

    it(
      'true when given an empty string', function() {
        expect(_isPalindrome('')).to.be.true;
      }
    );

    it(
      'true when given a length-1 palindrome', function() {
        expect(_isPalindrome('z')).to.be.true;
      }
    );

    it(
      'true when given a simple even-length palindrome', function() {
        expect(_isPalindrome('anna')).to.be.true;
      }
    );

    it(
      'true when given a simple odd-length palindrome', function() {
        expect(_isPalindrome('ana')).to.be.true;
      }
    );

    it(
      'true when given a cased even-length palindrome', function() {
        expect(_isPalindrome('AnNa')).to.be.true;
      }
    );

    it(
      'true when given a cased odd-length palindrome', function() {
        expect(_isPalindrome('Ana')).to.be.true;
      }
    );

    it(
      'true when given a punctuated palindrome', function() {
        expect(_isPalindrome('a,.?b%&$#b()!@;a[]-/–/—')).to.be.true;
      }
    );

    it(
      'true when given a spaced palindrome', function() {
        expect(_isPalindrome('a ba ')).to.be.true;
      }
    );

    it(
      'true when given a palindrome containing digits', function() {
        expect(_isPalindrome('a22a')).to.be.true;
      }
    );

    it(
      'true when given a palindrome containing digits', function() {
        expect(_isPalindrome('a22a')).to.be.true;
      }
    );

    it(
      'false when given a nonpalindrome', function() {
        expect(_isPalindrome('airbnbra')).to.be.false;
      }
    );

    it(
      'true when given a huge palindrome', function() {
        const fragment = 'oaeauhaocugauheouhtz';
        const repetition = 10000;
        const hugeHalf0 = fragment.repeat(repetition);
        const hugeHalf1 = fragment.split('').reverse().join('')
          .repeat(repetition);
        const hugeString = hugeHalf0 + hugeHalf1;
        expect(_isPalindrome(hugeString)).to.be.true;
      }
    );

  });

  context('invalid arguments', function() {

    it(
      'undefined when given no argument', function() {
        expect(_isPalindrome()).to.be.undefined;
      }
    );

    it(
      'undefined when given multiple arguments', function() {
        expect(_isPalindrome('aba', 'cdc')).to.be.undefined;
      }
    );

    it(
      'undefined when given a number', function() {
        expect(_isPalindrome(565)).to.be.undefined;
      }
    );

    it(
      'undefined when given an array', function() {
        expect(_isPalindrome(['monom'])).to.be.undefined;
      }
    );

    it(
      'undefined when given an object', function() {
        expect(_isPalindrome({ecce: true})).to.be.undefined;
      }
    );

  });

});
