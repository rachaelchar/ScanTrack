
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('employees', [{
    first_name: 'Rachael',
    last_name: 'Charewicz',
    admin: false,
    code: 'RRRR',
    working_status_id: 2,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: 'Marissa',
    last_name: 'Fortier',
    admin: false,
    code: 'MMMM',
    working_status_id: 2,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: 'Kyle',
    last_name: 'Jones',
    admin: true,
    code: 'KKKK',
    working_status_id: 2,
    position: 'CEO',
    hire_date: '2009-01-09',
    picture_fp: '#',
    pay_type_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    first_name: 'Brandon',
    last_name: 'Fall',
    admin: true,
    code: 'BBBB',
    working_status_id: 2,
    position: 'Developer',
    hire_date: '2020-01-09',
    picture_fp: '#',
    pay_type_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  ]),
};