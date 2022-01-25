

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Centres",
      [
        {
          name: "Woodlands Vaccination Hub",
          address: "Woodlands",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
        {
          name: "Pasir Ris Vaccination Hub",
          address: "Pasir Ris",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
        {
          name: "Harbourfront Vaccination Hub",
          address: "Harbourfront",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
        {
          name: "Jurong West Vaccination Hub",
          address: "Jalan Bahar",
          createdAt: "2021-12-31T16:30:07.592Z",
          updatedAt: "2021-12-31T16:30:07.592Z",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Centres", null, {});
  },
};
