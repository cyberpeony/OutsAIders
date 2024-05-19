/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('promotions').del();
    await knex('promotions').insert([
        {
            id: '1',
            nameStore: 'Store 1',
            description: '50% off on all items',
            typeOfPromotion: 'Discount',
            startDate: new Date(),
            endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            url: 'http://example.com/promo1'
        },
        {
            id: '2',
            nameStore: 'Store 2',
            description: 'Buy one get one free',
            typeOfPromotion: 'Offer',
            startDate: new Date(),
            endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            url: 'http://example.com/promo2'
        },
    ]);
};
