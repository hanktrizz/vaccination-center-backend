

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rosters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dateStart: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      dateEnd: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      assigned: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      nurseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      centreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Rosters");
  },
};
