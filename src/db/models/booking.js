

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Centre, Patient, Timeslot }) {
      // define association here
      this.belongsTo(Timeslot, { foreignKey: "timeslotId" });
      this.belongsTo(Patient, { foreignKey: "patientId" });
      this.belongsTo(Centre, { foreignKey: "centreId" });
    }
  }
  Booking.init(
    {
      isActive: { type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      modelName: "Booking",
    },
  );
  return Booking;
};
