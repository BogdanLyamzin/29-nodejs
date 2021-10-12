const {Unauthorized} = require("http-errors");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

const {User} = require("../../models");

const {SECRET_KEY} = process.env;

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !user.comparePassword(password)){
        throw new Unauthorized(`Wrong email or password`);
    }
    // if(!user){
    //     throw new Unauthorized(`Email ${email} not found`);
    // }

    // if(!user.comparePassword(password)){
    //     throw new Unauthorized(`Password wrong`);
    // }

    // const isCorrectPassword = bcrypt.compareSync(password, user.password);
    // if(!isCorrectPassword){
    //     throw new Unauthorized(`Password wrong`);
    // }
    const payload = {
        id: user._id
    }
    
    const token = jwt.sign(payload, SECRET_KEY);

    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    });
};

module.exports = login;