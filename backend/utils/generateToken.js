import jwt from 'jsonwebtoken';

// function that takes in the user id, then generates a jwt for that user
const generateToken = (id) => {
    // jwt.sign will generate a signed webtoken if we pass it the id (payload) and a secret AND options :D
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        // site when it expores (30 days)
        expiresIn: '30d'
    })
}

export default generateToken