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
    static associate(models) {
      // define association here
      Interviewer.belongsToMany(models.Applicant, {through : 'ApplicantInterviewer', foreignKey : 'interviewer_id'});
    }
  };
  Interviewer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interviewer',
  });
  return Interviewer;
};