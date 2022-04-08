const express = require("express");
const port = 3000;

const app = express();
const router = express.Router();

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.db,
  process.env.dbUsername,
  process.env.dbPassword,
  {
    dialect: "mysql",
    dialectOptions: {
      connectTimeout: 1000,
    },
  }
);

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

User.sync({ force: true });

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

app.use(express.json());
app.use("/", router);

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/users", (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
    .catch((error) => res.json({ error }))
    .then((user) => res.json(user));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
