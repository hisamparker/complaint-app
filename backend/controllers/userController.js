import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    register user, login user (generate a signed jwt, add it to cookie), respond with user data and token so we can check that they're logged in
// @route   POST /api/users/register
// @access  Public

const registerUser = async (req, res) => {
  try {
    const { userName, name, email, password, passwordVerify } = req.body;
    //validation
    //validate that it's all here!
    if(!userName || !name || !email || !password || !passwordVerify) {
      // respond with 400 which is a bad request and json object with a key: errorMessage and a response: the message
      return res.status(400).json({ errorMessage: `Please fill in all fields` })
    }
    //validate password length
    if(password.length < 6) {
      return res.status(400).json({ errorMessage: `Password must be at least 6 characters` })
    }
    //validate that password and verify password match
    if(password !== passwordVerify) {
      return res.status(400).json({ errorMessage: `Passwords don't match` })
    }
    // validate that email is unique, user.findOne returns a promise, so we need to await it
    const userExists = await User.findOne({ email })
    if(userExists) {
      return res.status(400).json({ errorMessage: `This email is already in use` })
    } 
    // we encript the password in the User model not here
    // create a new User, User.create is a method / shorthand that creates, then saves our user to the db
    const newUser = await User.create({
      userName,
      name, 
      email, 
      password
    })

    // log the user in! we say if data.token exists && matches our cookie, then user is logged in :D
    if(newUser) {
      const token = generateToken(newUser._id)
      // send token in a cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        MaxAge: 36000
      })
      res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        name: newUser.name,
        email: newUser.email,
        token: token
      })
    } else {
      res.status(400).json({ errorMessage: `Invalid user data` })
    }
 
  } catch (err) {
    console.error(err.message);
    //send the status and the message 500 = internal server error, send a message so others can't see anything specific
    res.status(500).json({ errorMessage: `Server error` })
  }

}


// @desc    log user in & get token
// @route   POST /api/users/login
// @access  Public
const logginUser = async (req, res) => {
  try {
    const { email, password } = req.body
     //validation
    //validate that it's all here!
    if( !email || !password ) {
      // respond with 400 which is a bad request and json object with a key: errorMessage and a response: the message
      return res.status(400).json({ errorMessage: `Please fill in all fields` })
    }
    
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id)
      // send token in a cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        MaxAge: 36000
      })
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        // if the password matches we return a token that has an id with the value of the user's id! so cool! 
        // go to https://jwt.io/ and put the token into their debugger then you can see what it contains here
        token: token,
      })
    } else {
      // 401 unaythorised request, don't say what exactly is wrong!
      res.status(401).json({ errorMessage: `Invalid email or password` })
    }
  } catch (err) {
    console.error(err.message);
    //send the status and the message 500 = internal server error, send a message so others can't see anything specific
    res.status(500).json({ errorMessage: `Server error` })
  }
}

// @desc    log user out & clear cookies
// @route   POST /api/users/logout
// @access  Private
const logoutUser = async( req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      // in case cookie doesn't remove cookie, this will ensure that browser clears it
      expires: new Date(0),
      secure: true,
      sameSite: "none",
      MaxAge: 36000
    }).status(200).send(`Successfully logged out!`)
}

// @desc    Get if user is logged in or not
// @route   GET /api/users/login
// @access  ?
const isLoggedIn = async (req, res) => {
  try {
    res.send(req.user)
  } catch (err) {
    res.json(false);
  }
};

// @desc    Get all users
// @route   GET /api/users
// @access  ?
const getAllUsers = async (req, res) => {
  try {
    // pass in empty object to get all users
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    console.error(err.message);
    //send the status and the message
    res.status(500).send(`Server error`)
  }
}

// // @desc    Auth user & get token
// // @route   POST /api/users/login
// // @access  Public
// const authUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body
//     const user = await User.findOne({ email })
  
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         // if the password matches we return a token that has an id with the value of the user's id! so cool! 
//         // go to https://jwt.io/ and put the token into their debugger then you can see what it contains here
//         token: generateToken(user._id),
//       })
//     } else {
//       res.status(401)
//       throw new Error('Invalid email or password')
//     }
// })

// // @desc    Register a new user
// // @route   POST /api/users
// // @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//     const { name, email, password } = req.body
//     console.log(req.body);
//     const userExists = await User.findOne({ email })

//     if (userExists) {
//       res.status(400)
//       throw new Error(`User already exists`)
//     }
//     // user.create is just syntactic sugar for user.save, when we save we use the 
//     const user = await User.create({
//       name, 
//       email, 
//       password
//     })

//     if(user) {
//       res.status(201).json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         password: user.password,
//         token: generateToken(user._id)
//       })
//     } else {
//       res.status(400)
//       throw new Error(`Invalid user data`)
//     }
   
// })

export { registerUser, getAllUsers, logginUser, isLoggedIn, logoutUser }