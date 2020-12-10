module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            paif: {
                type: Sequelize.STRING,
            },
            nis: {
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cpf: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            rg: {
                type: Sequelize.STRING,
            },
            sexo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            data_nascimento: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            naturalidade: {
                type: Sequelize.STRING,
            },

            name_mae: {
                type: Sequelize.STRING,
            },
            name_resp: {
                type: Sequelize.STRING,
            },
            cpf_resp: {
                type: Sequelize.STRING,
            },
            rg_resp: {
                type: Sequelize.STRING,
            },
            situacao: {
                type: Sequelize.STRING,
            },
            provider: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            actived: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
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
        await queryInterface.dropTable('users');
    },
};
