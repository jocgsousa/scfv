module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.addColumn('users', 'fk_cursos_id', {
            type: Sequelize.INTEGER,

            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',

            references: {
                model: 'cursos',
                key: 'id',
            },
        }),

    down: async (queryInterface) =>
        queryInterface.removeColumn('users', 'fk_cursos_id'),
};
