const palindrome = require('../functions/palindrome');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;


describe('Palindrome', () => {
    it('should return false when the value is not the same backwards', () => {
        const word = "leonardo";
        expect(palindrome(word)).to.equal(false);
    });
});

describe('Palindrome', () => {
    it('should return true when the value is the same backwards', () => {
        const word = "ANA";
        expect(palindrome(word)).to.equal(true);
    });
});
