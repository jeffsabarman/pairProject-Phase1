'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interviewer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    fullName() {
      return `${this.first_name} ${this.last_name}`;
    }

    static nameAndDepartment(fullname, department) {
      return `${fullname} - ${department}`;
    }

    static associate(models) {
      // define association here
      Interviewer.belongsToMany(models.Applicant, {through : 'ApplicantInterviewer', foreignKey : 'interviewer_id'});
    }
  };
  Interviewer.init({
    first_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {msg : 'First Name Field Is Required!'}
      }
    },
    last_name: DataTypes.STRING,
    birth_date: {
      type : DataTypes.DATE,
      validate : {
        notEmpty : {msg : 'Birth Date Field Is Required!'}
      }
    },
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {msg : 'Email Field Is Required!'}
      }
    },
    department: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {msg : 'Department Field Is Required!'}
      }
    }
  }, {
    sequelize,
    modelName: 'Interviewer',
  });
  return Interviewer;
};