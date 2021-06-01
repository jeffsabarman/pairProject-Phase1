'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicantInterviewer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ApplicantInterviewer.init({
    applicant_id: DataTypes.INTEGER,
    interviewer_id: DataTypes.INTEGER,
    schedule_date: DataTypes.DATE,
    interview_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApplicantInterviewer',
  });
  return ApplicantInterviewer;
};