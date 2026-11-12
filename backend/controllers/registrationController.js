const emailRegex = require("../utiles/emailRegex")
const passwordRegex = require("../utiles/passwordRegex")
const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt');

const registrationController = async (req, res) => {
    let { username, email, password } = req.body

    if (!username) {
        res.send({ error: "username is required" })
    } else if (!email) {
        res.send({ error: "email is required" })
    } else if (!emailRegex(email)) {
        res.send({ error: "valid email deo" });
    }
    else if (!password) {
        res.send({ error: "password is required" })
    }  else if (!passwordRegex(password)) {
        res.send({ error: "sothik password deo" });
    }
    else {

        let existinguser = await UserSchema.find({ email: email })
        if (existinguser.length > 0) {
            res.send({ error: "Data Already Existed" });

        } else {

            bcrypt.hash(password, 10, function (err, hash) {

                const data = new UserSchema({
                    username: username,
                    email: email,
                    password: hash,
                })

                data.save()
                res.send({
                    username: data.username,
                    email: data.email,
                    success: "registration successfully"

                })

            });

        }

    }

}
module.exports = registrationController
