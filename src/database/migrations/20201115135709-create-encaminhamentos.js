module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('encaminhamentos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            tipo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            from: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            to: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('encaminhamentos');
    },
};
