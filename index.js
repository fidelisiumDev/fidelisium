import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";

const app = express();
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));




app.get("/", (req, res) => {
  // FUNCION PARA PRESENTAR EL AÑO ACTUAL EN EL FOOTER
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});


app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`);
});
