const { User } = require('../models');

const userdata =
[
  {
    "username": "Buddy 1",
    "password": "password"
  },
  {
    "username": "Buddy 2",
    "password": "password"
  },
  {
    "username": "Shiro",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;