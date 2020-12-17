module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('encaminhamentos', 'fk_user_id', {
            type: Sequelize.INTEGER,

            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',

            references: {
                model: 'users',
                key: 'id',
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.removeColumn('encaminhamentos', 'fk_user_id');
    },
};
