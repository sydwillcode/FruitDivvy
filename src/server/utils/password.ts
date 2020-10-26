// file sole purpose to salt and hash passwords.
// can be auth index, but just put it here for clarity.
import * as bcrypt from 'bcrypt';

export const generateHash = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

// built in that returns a boolean if passwords match
// used for extra security to ensure match
export const comparePasswords = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}