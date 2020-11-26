module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.addColumn('documentos', 'fk_users_id', {
            type: Sequelize.INTEGER,

            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',

            references: {
                model: 'users',
                key: 'id',
            },
        }),

    down: async (queryInterface) =>
        queryInterface.removeColumn('documentos', 'fk_users_id'),
};
