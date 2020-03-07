// const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    // The email cannot be null, and must be a proper email before creation
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The password cannot be null
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Can use hook to add password to user before saving
  return User;
};
