module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('cursos', 'fk_endereco_id', {
    type: Sequelize.INTEGER,

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',

    references: {
      model: 'enderecos',
      key: 'id',
    },

  }),

  down: async (queryInterface) => queryInterface.removeColumn('cursos', 'fk_endereco_id'),
};
