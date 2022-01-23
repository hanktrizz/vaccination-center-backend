

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Roster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Nurse }) {
      // define association here
      this.hasOne(Nurse, { foreignKey: "nurseId" });
    }
  }
  Roster.init(
    {
      dayOff: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "roster",
      modelName: "Roster",
    },
  );
  return Roster;
};
