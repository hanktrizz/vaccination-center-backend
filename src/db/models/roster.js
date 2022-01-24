

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Roster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Nurse, Centre }) {
      // define association here
      this.belongsTo(Nurse, { foreignKey: "nurseId" });
      this.belongsTo(Centre, { foreignKey: "centreId" });
    }
  }
  Roster.init(
    {
      dateStart: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dateEnd: { type: DataTypes.DATEONLY, allowNull: false },
      assigned: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "Roster",
    },
  );
  return Roster;
};
