import Bcrypt from "bcrypt";

/**
 * Returns a hash of a value
 * 
 * @param value - plain text password
 * @param config config
 * @param config.saltRounds - salt rounds (default: 10)
 * @returns hash
 */
function hashPassword(value: string, config?: { saltRounds?: number }): string {
	const saltRounds = config?.saltRounds || 10;
	return Bcrypt.hashSync(value, saltRounds);
}

/**
 * Returns true if sample matches hash
 * 
 * @param sample - plain text password
 * @param hash - hashed plain text password
 */
function comparePasswords(sample: string, hash: string): boolean {
	return Bcrypt.compareSync(sample, hash);
}

export {
	hashPassword,
	comparePasswords
};