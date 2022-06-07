import { userController } from "../controllers";
import express from "express";
// import auth from "../utils/middlewares/auth";
// import uploads from "../utils/file-upload";

const userRouter = express.Router();

userRouter.post("/create", (...args) => userController.create(...args));

// userRouter.post("/login", (...args) => user.login(...args));

// userRouter.get("/get-all-users", [auth.auth, auth.checkrole], (...args) =>
//   user.getAllUsers(...args)
// );

// userRouter.get("/:id", [auth.auth], (...args) => user.getUserById(...args));

// userRouter.patch(
//   "/update-user/:id",
//   [auth.auth, uploads.single("profile")],
//   (...args) => user.updateUser(...args)
// );

// userRouter.patch("/update-userPassword/:id", [auth.auth], (...args) =>
//   user.UserPassUpdate(...args)
// );

// userRouter.post("/super-user", (...args) => user.SuperUser(...args));

// userRouter.get("/get-all-super-users", [auth.auth, auth.checkrole], (...args) =>
//   user.getAllSuperUsers(...args)
// );

// userRouter.post("/filter-super-user", [auth.auth, auth.checkrole], (...args) =>
//   user.filterSuperUsers(...args)
// );

// userRouter.patch("/super-update-user/:id", [auth.auth], (...args) =>
//   user.superUserUpdate(...args)
// );

// userRouter.patch(
//   "/super-update-userPassword/:id",
//   [auth.auth, auth.checkrole],
//   (...args) => user.superUserPassUpdate(...args)
// );

// userRouter.delete("/delete/:id", [auth.auth, auth.checkrole], (...args) =>
//   user.deleteUser(...args)
// );

// userRouter.post("/check-email", (...args) => user.checkEmail(...args));

// userRouter.patch("/password", auth.auth, (...args) => user.passUpdate(...args));

module.exports = userRouter;
