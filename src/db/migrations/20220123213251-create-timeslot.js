

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Timeslots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      slotDate: {
        type: Sequelize.DATEONLY,
      },
      slotTimeStart: {
        type: Sequelize.INTEGER,
      },
      slotBooked: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Timeslots");
  },
};
