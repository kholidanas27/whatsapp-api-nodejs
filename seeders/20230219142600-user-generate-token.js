'use strict';

/** @type {import('sequelize-cli').Migration} */
require("dotenv").config();
const tokenSecret = require('crypto').randomBytes(64).toString('hex');
const jwt = require('jsonwebtoken');
const userId = '1';
const name = 'admin';
const email = 'admin@gmail.com';
const accessToken = jwt.sign({userId, name, email}, tokenSecret,{});

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      userName: 'admin',
      accessToken: accessToken
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
