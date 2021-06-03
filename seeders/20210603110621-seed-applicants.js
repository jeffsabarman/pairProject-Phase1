'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Applicants', [
     {
       first_name: "Jeffrey",
       last_name: "Sabarman",
       birth_date: "1998-12-27",
       gender: "Male",
       email: "triandije98@gmail.com",
       position: "Sales",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      first_name: "Edwin",
      last_name: "Tanzil",
      birth_date: "1995-09-23",
      gender: "Male",
      email: "edwintanzil1@gmail.com",
      position: "Full-Stack Developer",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Applicants', null);
  }
};
