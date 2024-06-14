const User = require('../models/userModel')

const signupUser = async (req, res) => {
    const {email, password} = req.body
    User.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            User.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
}


const loginUser = async (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json({message: "Success", data: user});
            }
            else{
                res.json("Wrong password");
            }
        }
        else{
            res.json("No records found! ");
        }
    })
}

module.exports = { signupUser, loginUser }




