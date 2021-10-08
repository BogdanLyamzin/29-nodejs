const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs");

const {User} = require("../../models");

const register = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user){
        throw new Conflict("Already registered");
        // const error = new Error("Already registered");
        // error.status = 409;
        // throw error;
        // res.status(409).json({
        //     status: "error",
        //     code: 409,
        //     message: "Already registered"
        // });
        // return;
    }
    const newUser = new User({email});
    // newUser = {email}
    newUser.setPassword(password);
    // newUser = {email, password}
    await newUser.save();

    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // await User.create({email, password: hashPassword});
    
    res.status(201).json({
        status: "success",
        code: 201,
        message: "Register success"
    });
};

module.exports = register;