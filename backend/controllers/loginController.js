const emailRegex = require("../utiles/emailRegex");
const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  let { email, password } = req.body;
  if (!email) {
    res.send({ error: "email is required" });
  } else if (!emailRegex(email)) {
    res.send({ error: "valid email required" });
  } else if (!password) {
    res.send({ error: "password is required" });
  } else {
    let existingData = await UserSchema.find({ email: email });

    if (existingData.length > 0) {
      bcrypt.compare(
        password,
        existingData[0].password,
        function (err, result) {
          if (err) {
            res.send({ error: "Invaild Creadiential0" });
          } else {
            if (result) {
              res.send({
                success: "login successfully",
                id: existingData[0]._id,
                email: existingData[0].email,
                username: existingData[0].username,
              })
            } else {
              res.send({ error: "Invaild Creadiential1" });
            }
          }
        },
      );
    } else {
      res.send({ error: "Invaild Creadiential2" });
    }
  }
};
module.exports = loginController;
