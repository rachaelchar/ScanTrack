
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [{
    first_name: 'Rachael',
    last_name: 'Charewicz',
    email: 'rachael@scantrack.com',
    password: '*',
    code: 'RRRR',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Brandon',
    last_name: 'Fall',
    email: 'brandon@scantrack.com',
    password: '*',
    code: 'BBBB',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Marissa',
    last_name: 'Fortier',
    email: 'marissa@scantrack.com',
    password: '*',
    code: 'MMMM',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    first_name: 'Kyle',
    last_name: 'Jones',
    email: 'Kyle@scantrack.com',
    password: '*',
    code: 'KKKK',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  ]),
};
