/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('publications').del();

  // Inserts seed entries
  await knex('publications').insert([
    {
      id: 'some-id-1',
      userId: 'user-id-1',
      title: 'Sample Publication 1',
      description: 'Description for sample publication 1',
      publicationType: 'Type1',
      publicationDate: new Date(),
      price: 100,
      location: 'Location1',
      state: 'State1'
    },
    {
      id: 'some-id-2',
      userId: 'user-id-2',
      title: 'Sample Publication 2',
      description: 'Description for sample publication 2',
      publicationType: 'Type2',
      publicationDate: new Date(),
      price: 200,
      location: 'Location2',
      state: 'State2'
    }
  ]);
};
