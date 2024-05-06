const jwt = require("jsonwebtoken");
const User = require("../model/usermodel");
const Token = require("../model/AuthToken");
const bcrypt = require("bcrypt");


exports.registerUser = async (req, res) => {
    try {
      const isUser = await User.findOne({ email: req.body.email });
      if (isUser)
        return res.status(400).send({
          success: false,
          message: "User already exist",
        });
      const data = {
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10),

      };
      const newUser = new User(data);
      const user = await newUser.save();
      const access_token = jwt.sign({ _id: user._id }, process.env.JWT_Secret, {
        expiresIn: "30m",
      });
      const refresh_token = jwt.sign(
        { _id: user._id },
        process.env.JWT_Refresh_Secret
      );
      const refToken = new Token({
        token: refresh_token,
      });
      await refToken.save();
      console.log(user,
        access_token,
        refresh_token,)
      res.send({
        success: true,
        user,
        access_token,
        refresh_token,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  };
  
  exports.loginUser = async (req, res) => {
    try {
      const user = await User.findOne({
        $or: [{ email: req.body.email }, { name: req.body.password }],
      });
      if (!user)
        return res.status(401).send({
          success: false,
          message: "User doesn't exist",
        });
        const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (!isMatch)
        return res.status(401).send({
          success: false,
          message: "Wrong password",
        });
      const access_token = jwt.sign({ _id: user._id }, process.env.JWT_Secret, {
        expiresIn: "30m",
      });
      const refresh_token = jwt.sign(
        { _id: user._id },
        process.env.JWT_Refresh_Secret
      );
      const refToken = new Token({
        token: refresh_token,
      });
      await refToken.save();
      user.password = undefined;
      // console.log(user,
      //   access_token,
      //   refresh_token,)
      res.send({
        success: true,
        user,
        access_token,
        refresh_token,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  };

  exports.logout = async (req, res) => {
    try {
      const { token } = req.body;
      res.send(await Token.deleteOne({ token }));
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  };