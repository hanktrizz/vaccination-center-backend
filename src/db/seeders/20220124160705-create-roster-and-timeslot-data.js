

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const records = [];
    const timeslots = [];

    const blockTimes = [
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
      "12:30",
      "12:45",
      "13:00",
      "13:15",
      "13:30",
      "13:45",
      "14:00",
      "14:15",
      "14:30",
      "14:45",
      "15:00",
      "15:15",
      "15:30",
      "15:45",
      "16:00",
      "16:15",
      "16:30",
      "16:45",
    ];

    // insert rosters for 4 nurses for the next 24 days starting from Feb
    for (let i = 1; i <= 4; ++i) {
      for (let j = 1; j <= 24; ++j) {
        const record = {
          dateStart: `2022-02-${j}`,
          dateEnd: `2022-02-${j}`,
          assigned: true,
          nurseId: i, // don't have nurse Id 0 in test data
          centreId: i, // don't have centre id 0 in test data
          createdAt: "2022-01-25T16:30:07.592Z",
          updatedAt: "2022-01-25T16:30:07.592Z",
        };

        records.push(record);
      }
    }

    let count = 1;
    // foreach vaccine centre
    for (let i = 0; i < records.length; ++i) {
      for (let j = 0; j < blockTimes.length; ++j) {
        if (count > 4) count = 1;

        const timeslot = {
          date: records[i].dateStart,
          time: blockTimes[j],
          status: "FREE",
          sequence: count++, // don't have nurse Id 0 in test data
          createdAt: "2022-01-25T16:30:07.592Z",
          updatedAt: "2022-01-25T16:30:07.592Z",
        };

        timeslots.push(timeslot);
      }
    }

    await queryInterface.bulkInsert("Rosters", records, {});
    await queryInterface.bulkInsert("Timeslots", timeslots, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rosters", null, {});
    await queryInterface.bulkDelete("Timeslots", null, {});
  },
};
