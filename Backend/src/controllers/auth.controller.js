const userModel = require('../config/models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require('../config/models/blacklist.model');


/**
 * @name registerUserController
 * @desciption register a new user ,expect username , email and password in the request body
 * @access public
 */

async function registerUserController(req, res) {

const { username, email, password } = req.body;

if(!username || !email || !password){
    return res.status(400).json({message:'All fields are required'})
}

 const isUserExist = await userModel.findOne ({$or:[{username},{email}]});
if (isUserExist) {
    return res.status(400).json({message:'Username or email already exists'})
}


const hash = await bcrypt.hash(password, 10);

const user = new userModel({
    username: username,
    email: email,
    password: hash
});

// persist the user to the database before issuing a token
await user.save();

const token = jwt.sign({id:user._id, username:user.username},
     process.env.JWT_SECRET, 
     {expiresIn:'1d'}); 
     
     res.cookie('token', token)
     res.status(201).json({message:'User registered successfully', 
        user:{
            id:user._id,
             username:user.username,
              email:user.email
            },
     })

}

/**
 * @name loginUserController
 * @desciption login a user ,expect email and password in the request body
 * @access public
 */

async function loginUserController(req, res){
    const {email, password} = req.body;
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({message:'Invalid email or Password'})
    }
       const isPasswordValid = await bcrypt.compare(password, user.password);
       if(!isPasswordValid){
        return res.status(400).json({message:'Invalid email or password'})
       }
       const token = jwt.sign
    ({id:user._id, username:user.username},
      process.env.JWT_SECRET, 
      {expiresIn:'1d'});
      res.cookie('token', token);
      res.status(200).json({message:'Login successful', user:{id:user._id, username:user.username, email:user.email}});
} 

/**
 * @name logoutUserController
 * @desciption Logout a user by blacklisting the token and clearing the cookie
 * @access public
 */
async function logoutUserController(req, res){
    const token = req.cookies.token;
    if(token){
     await tokenBlacklistModel.create({token});

    }
    res.clearCookie("token");
    res.status(200).json({message:'Logout successful'});

}

/**
 * @name getMeController
 * @description  get the current logedin user detail
 * @access private
 */

async function getMeController(req, res){
    const user = await userModel.findById(req.user.id);
    res.status(200).json({
        message:'User fetched successfully',
        user:{id:user._id, username:user.username, email:user.email}
    });



}



module.exports = {
    registerUserController, 
    loginUserController,
    logoutUserController,
    getMeController
}
