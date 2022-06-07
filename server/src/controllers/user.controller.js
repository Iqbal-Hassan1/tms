import Users from "../models";
// import Users from "../models/user.model";
// import SuperUser from "../models/superUser.model";
// import { generateMessages } from "../utils/generate-message";
import helper from "../utils/middlewares/helper";

class User {
  constructor() {}

  async create(req, res, next) {
    try {
      // let file = req.file ? req.file.path : "";

      const {
        firstName,
        lastName,
        email,
        user_role,
        password,
        phoneNumber,
        gender,
        address,
      } = req.body;

      // let userId;

      // let userdata = await Users.findAll().sort({ _id: -1 });

      // if (userdata) userId = parseInt(userdata.userId) + 1;
      // else userId = "100001";

      let user = Users.set({
        // image: file,
        firstName,
        lastName,
        email,
        user_role,
        password,
        phoneNumber,
        // userId,
        gender,
        address,
      });

      let data = await user.save();

      // let token = await data.token();

      data = helper.shallowCopy(data);

      // data = Object.assign(data, { token: token });

      res.status(200).json({ status: true, message: "SUCCESS", data });
    } catch (error) {
      next(error);
    }
  }

  // async login(req, res, next) {
  //   try {
  //     const { email, password } = req.body;

  //     let user;

  //     let token;

  //     let [admin, superadmin] = await Promise.all([
  //       Users.findOne({ email: email }),
  //       SuperUser.findOne({ email: email }),
  //     ]);

  //     if (!admin && !superadmin) throw generateMessages("NO_RECORD_FOUND");

  //     if (admin && !(await admin.validPassword(password)))
  //       throw generateMessages("PASSWORD_INCORRECT");

  //     if (superadmin && !(await superadmin.validPassword(password)))
  //       throw generateMessages("PASSWORD_INCORRECT");

  //     if (superadmin) {
  //       token = await superadmin.token();
  //       user = helper.shallowCopy(superadmin);
  //     }
  //     if (admin) {
  //       token = await admin.token();
  //       user = helper.shallowCopy(admin);
  //     }

  //     user = Object.assign(user, { token: token });

  //     res.status(200).json({ status: true, message: "SUCCESS", data: user });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getAllUsers(req, res, next) {
  //   try {
  //     let data = await Users.find({ userType: { $nin: ["Super Admin"] } });

  //     res.status(200).json({ status: true, message: "SUCCESS", data });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async filterUsers(req, res, next) {
  //   try {
  //     let { filter, region, userType } = req.body;

  //     let map = [];

  //     if (filter) map.push({ $text: { $search: filter } });

  //     if (region) map.push({ region: region });

  //     if (userType) map.push({ userType: userType });

  //     let data = await Users.find({ $and: map });

  //     res.status(200).json({ status: true, message: "SUCCESS", data });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async updateUser(req, res, next) {
  //   try {
  //     const { id } = req.params;

  //     let file = req.file ? req.file.path : "";

  //     let {
  //       firstName,
  //       lastName,
  //       secondaryContact,
  //       email,
  //       mainContact,
  //       jobTitle,
  //     } = req.body;

  //     await Users.updateOne(
  //       { _id: id },
  //       {
  //         firstName,
  //         lastName,
  //         secondaryContact,
  //         email,
  //         mainContact,
  //         jobTitle,
  //         image: file,
  //       }
  //     );

  //     res.status(200).json({ status: true, message: "SUCCESS" });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async UserPassUpdate(req, res, next) {
  //   try {
  //     const { id } = req.params;

  //     const { password } = req.body;

  //     await Users.findOneAndUpdate({ _id: id }, { password: password });

  //     res.status(200).json({ status: true, message: "SUCCESS" });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async SuperUser(req, res, next) {
  //   try {
  //     const { username, email, permissions, password } = req.body;

  //     let uid;

  //     let data = await SuperUser.findOne().sort({ _id: -1 });

  //     if (data) uid = parseInt(data.UserId) + 1;
  //     else uid = "100001";

  //     let x = permissions.split(",");

  //     const superuser = await SuperUser.create({
  //       username: username,
  //       email: email,
  //       UserId: uid,
  //       Permissions: x,
  //       password: password,
  //     });

  //     res.status(200).json({ status: true, message: "SUCCESS", superuser });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getAllSuperUsers(req, res, next) {
  //   try {
  //     let data = await SuperUser.find();

  //     res.status(200).json({ status: true, message: "SUCCESS", data });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async filterSuperUsers(req, res, next) {
  //   try {
  //     let { filter } = req.body;

  //     let map = [];

  //     if (filter) map.push({ $text: { $search: filter } });

  //     let data = await SuperUser.find({ $and: map });

  //     res.status(200).json({ status: true, message: "SUCCESS", data });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async superUserUpdate(req, res, next) {
  //   try {
  //     const { id } = req.params;

  //     const { username, permissions } = req.body;

  //     let x = permissions.split(",");

  //     await SuperUser.updateOne(
  //       { _id: id },
  //       { username: username, Permissions: x }
  //     );

  //     res.status(200).json({ status: true, message: "SUCCESS" });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async superUserPassUpdate(req, res, next) {
  //   try {
  //     const { id } = req.params;

  //     const { password } = req.body;

  //     await SuperUser.findOneAndUpdate({ _id: id }, { password: password });

  //     res.status(200).json({ status: true, message: "SUCCESS" });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async deleteUser(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const { password } = req.body;

  //     let superadmin = await SuperUser.findOne({ _id: req.user.id });

  //     if (!superadmin) throw generateMessages("NO_RECORD_FOUND");

  //     if (superadmin && !(await superadmin.validPassword(password)))
  //       throw generateMessages("PASSWORD_INCORRECT");

  //     await Users.deleteOne({ _id: id });

  //     res.status(200).json({ status: true, message: "SUCCESS" });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async checkEmail(req, res, next) {
  //   try {
  //     let { email } = req.body;

  //     let [adminEmail, superadminEmail] = await Promise.all([
  //       Users.findOne({ email: email }),
  //       SuperUser.findOne({ email: email }),
  //     ]);

  //     if (adminEmail) throw generateMessages("ALREADY_EXISTS");

  //     if (superadminEmail) throw generateMessages("ALREADY_EXISTS");

  //     res.status(200).json({ status: true, message: "SUCCESS" });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getUserById(req, res, next) {
  //   try {
  //     let data = await Users.findOne({ _id: req.params.id });

  //     res.status(200).json({ status: true, message: "SUCCESS", data });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async passUpdate(req, res, next) {
  //   try {
  //     const { currentpassword, password } = req.body;

  //     console.log(req.user.id);

  //     const user = await Users.findOne({ _id: req.user.id });

  //     const isMatch = await user.validPassword(currentpassword);

  //     if (!isMatch) throw generateMessages("PASSWORD_INCORRECT");

  //     await Users.findOneAndUpdate(
  //       { _id: req.user.id },
  //       { password: password }
  //     );

  //     res.status(200).json({ status: true, message: "SUCCESS" });
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

module.exports = User;
