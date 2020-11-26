module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.addColumn('cursos', 'fk_users_id', {
            type: Sequelize.INTEGER,

            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',

            references: {
                model: 'users',
                key: 'id',
            },
        }),

    down: async (queryInterface) =>
        queryInterface.removeColumn('cursos', 'fk_users_id'),
};
