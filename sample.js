var crypto = require('crypto')
function hardcodedCredentialsNoncompliant(salt, iterations, keyLen, digest) {
    // Noncompliant: password is hardcoded.
    crypto.pbkdf2('password', salt, iterations, keyLen, digest, (err, key) => {
        if (err) {
            throw err
        }
        return key.toString('base64')
    })
}