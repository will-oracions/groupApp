var jwt = require('jsonwebtoken')
var JWT8_SIGN_SECRET = "sji49D9SU8FD09QN9fddn84S9N39D8S989Q9#eJF9Sddkszkxooos"

module.exports = {
    generateTokenUser: function(userData:any){
        return jwt.sign({
            UserId: userData.id,
            Email: userData.email
        },
        JWT8_SIGN_SECRET)
    }
}