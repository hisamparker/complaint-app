import User from '../models/userModel.js'

// @desc    Create a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, userName } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error(`User already exists`)
    }
    // user.create is just syntactic sugar for user.save
    const user = await User.create({
      name, 
      userName, 
      password
    })

    if(user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        userName: user.userName,
      })
    } else {
      res.status(400)
      throw new Error(`Invalid user data`)
    }
  } catch (err) {
    console.error(err.message);
    //send the status and the message
    res.status(500).send(`Server error`)
  }
   
}

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

export { registerUser, getAllUsers }