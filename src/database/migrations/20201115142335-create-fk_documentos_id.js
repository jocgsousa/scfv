module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('users', 'fk_documentos_id', {
    type: Sequelize.INTEGER,

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',

    references: {
      model: 'documentos',
      key: 'id',
    },

  }),

  down: async (queryInterface) => queryInterface.removeColumn('users', 'fk_documentos_id'),
};
