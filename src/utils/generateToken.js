import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";
import { access } from "fs";
const user = {
  id: 1,
  name: "John Doe",
  role: "manager",
  dept: "IT",
  accessLevel: 3,
  team: 2,
};

const token = jwt.sign(user, jwtSecret, {
  expiresIn: "1h",
});
console.log(`JWT token for ${user.role} ${user.name}: ${token}`);
