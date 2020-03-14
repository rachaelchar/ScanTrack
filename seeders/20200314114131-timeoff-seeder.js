module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('timeoffs', [{
    employee_id: 1,
    start_date: '2020-02-24',
    end_date: '2020-02-04',
    reason: 'If I do not go to Italy for gelato I will die',
    leave_type_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    employee_id: 2,
    start_date: '2020-03-16',
    end_date: '2020-03-21',
    reason: 'BIRTHDAY TRIP #Broadway',
    leave_type_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    employee_id: 3,
    start_date: '2020-01-16',
    end_date: '2020-01-18',
    reason: 'One too many Monsters',
    leave_type_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    employee_id: 4,
    start_date: '2020-01-16',
    end_date: '2020-01-18',
    reason: 'Amazing international travel with my gorgeous family',
    leave_type_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  ]),
};