module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('clockins', [{
    employee_id: 1,
    time: new Date(),
    week_num: 2,
    year: '2020-01-09',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    employee_id: 2,
    time: new Date(),
    week_num: 2,
    year: '2020-01-09',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    employee_id: 3,
    time: new Date(),
    week_num: 2,
    year: '2020-01-09',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    employee_id: 4,
    time: new Date(),
    week_num: 2,
    year: '2020-01-09',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    employee_id: 5,
    time: new Date(),
    week_num: 2,
    year: '2020-01-09',
    created_at: new Date(),
    updated_at: new Date(),
  },
  ]),
};