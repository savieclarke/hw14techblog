const router = require("express").Router();
const sequelize = require("../config/config");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  res.render("main");
});

router.get("/login", (req, res) => {
  res.render("login");
});