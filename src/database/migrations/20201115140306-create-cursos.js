module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('cursos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            duration: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            date_init: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            date_finalized: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            complete: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            orgao: {
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
        await queryInterface.dropTable('cursos');
    },
};
