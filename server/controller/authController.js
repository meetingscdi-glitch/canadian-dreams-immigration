const jwt = require('jsonwebtoken');
const user = require('../models/userModel');
 
 async function registerUser(req,res) {
     try {
    const { name, email, password, phoneNumber } = req.body;

     const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

     const newUser = new user({
      name,
      email,
      password,
      phoneNumber,
    });

    await newUser.save();

     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({
      status:200,
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
      },
    });
  } catch (error) {
    res.status(500).json({ status:500, message: error.message });
  }
}  

 async function loginUser(req,res) {
      try {
    const { email, password } = req.body;

     const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

     const isMatch = await existingUser.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

     const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        phoneNumber: existingUser.phoneNumber,
      },
    });
  } catch (error) {
    res.status(500).json({ status:500,message: error.message });
  }
}

 async function getUserProfile(req,res) {
   try {
    const user = await user.findById(req.user.userId).select('-password');
    res.status(200).json({ status:200, message: 'User profile fetched successfully', response: user });
   } catch (error) {
    res.status(500).json({ status:500,message: error.message });
  }
}

module.exports = {
   registerUser,
  loginUser,
  getUserProfile
};