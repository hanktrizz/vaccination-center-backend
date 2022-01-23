const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Nurse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Roster }) {
      // define association here
      this.belongsTo(Roster, {
        foreignKey: "nurseId",
      });
    }

    // mask the id field and return all others
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Nurse.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "nurse",
      modelName: "Nurse",
    },
  );
  return Nurse;
};
