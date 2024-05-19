/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('finances').del();
    await knex('finances').insert([
        {
            id: '1',
            userId: 'user1',
            financeType: 'Income',
            concept: 'Scholarship',
            amount: 1500,
            dateFinance: new Date()
        },
        {
            id: '2',
            userId: 'user2',
            financeType: 'Expense',
            concept: 'Rent',
            amount: 500,
            dateFinance: new Date()
        },
    ]);
};
