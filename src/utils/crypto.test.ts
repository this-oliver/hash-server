import { expect } from 'chai';
import { hashPassword, comparePasswords } from "./crypto";

const JWT_SECRET = "secret";

describe('Crypto Util', () => {

	before(() => {
		process.env.JWT_SECRET = JWT_SECRET;
	});
	
	describe('hashPassword()', () => {
		it('should return a string', () => {
			const hash = hashPassword('password');
			expect(hash).to.be.a('string');
		});

		it('should return a different string for the same input', () => {
			const sample = 'password';
			const hash1 = hashPassword(sample);
			const hash2 = hashPassword(sample);

			expect(hash1).to.not.equal(hash2);
		});
	});

	describe('comparePasswords()', () => {
		it('should return true if password matches hash', () => {
			const sample = 'password';
			const hash = hashPassword(sample);
			const result = comparePasswords(sample, hash);
			expect(result).to.be.true;
		});

		it('should return false if password does not match hash', () => {
			const sample = 'password';
			const hash = hashPassword(sample);
			const result = comparePasswords('wrong password', hash);
			expect(result).to.be.false;
		});
	});
});