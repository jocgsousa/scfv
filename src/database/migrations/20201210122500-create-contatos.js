module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('contatos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            tel_fixo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tel_celular: {
                type: Sequelize.STRING,
            },
            tel_celular2: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('contatos');
    },
};
