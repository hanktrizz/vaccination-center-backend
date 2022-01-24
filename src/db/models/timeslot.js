

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Timeslot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Booking }) {
      // define association here
      this.hasOne(Booking);
    }
  }
  Timeslot.init(
    {
      date: { type: DataTypes.DATEONLY, allowNull: false },
      time: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, defaultValue: "FREE" },
      sequence: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Timeslot",
    },
  );
  return Timeslot;
};
