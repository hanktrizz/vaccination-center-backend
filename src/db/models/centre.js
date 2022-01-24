

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Centre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Booking, Roster }) {
      // define association here
      this.hasMany(Roster);
      this.hasMany(Booking);
    }
  }
  Centre.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Centre",
    },
  );
  return Centre;
};
