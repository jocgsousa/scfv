module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.addColumn('users', 'fk_contatos_id', {
            type: Sequelize.INTEGER,

            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',

            references: {
                model: 'contatos',
                key: 'id',
            },
        }),

    down: async (queryInterface) =>
        queryInterface.removeColumn('users', 'fk_contatos_id'),
};
