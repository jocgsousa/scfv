module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('encaminhamentos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            unidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            endereco_unidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            objetivo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            necessidades: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            obs: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            contato: {
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
