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
     return queryInterface.bulkInsert('Interviewers', [
      {
        first_name: "John",
        last_name: "Doe",
        birth_date: "1980-10-14",
        gender: "Male",
        email: "johndoe@gmail.com",
        department: "Sales & Marketing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       first_name: "Mary",
       last_name: "Johnson",
       birth_date: "1991-02-20",
       gender: "Female",
       email: "maryjohnson@gmail.com",
       department: "Human Resources",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      first_name: "Sally",
      last_name: "Susan",
      birth_date: "1973-03-13",
      gender: "Female",
      email: "sallysusan@gmail.com",
      department: "Information Technology",
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
    return queryInterface.bulkDelete('Interviewers', null);
  }
};
