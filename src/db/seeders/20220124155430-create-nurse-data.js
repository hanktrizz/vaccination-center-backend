

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Nurses",
      [
        {
          firstName: "Misaki",
          lastName: "M",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
        {
          firstName: "Chiharu",
          lastName: "S",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
        {
          firstName: "Nami",
          lastName: "M",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
        {
          firstName: "Kie",
          lastName: "N",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Nurses", null, {});
  },
};
