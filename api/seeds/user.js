/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('user').del();
    await knex('user').insert([
        {
            id: 'user1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            emailVerified: new Date(),
            image: 'https://example.com/images/john.jpg',
            password: 'password123',
            role: 'USER',
            dateBirth: new Date('1990-01-01'),
            city: 'Cityville',
            university: 'University of Cityville',
            preferences: 'Quiet, non-smoking',
            isTwoFactorEnabled: false
        },
        {
            id: 'user2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            emailVerified: new Date(),
            image: 'https://example.com/images/jane.jpg',
            password: 'password456',
            role: 'USER',
            dateBirth: new Date('1992-02-02'),
            city: 'Townsville',
            university: 'University of Townsville',
            preferences: 'Active, pet-friendly',
            isTwoFactorEnabled: false
        },
    ]);
};
