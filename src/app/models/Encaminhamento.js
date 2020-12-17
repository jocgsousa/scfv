import Sequelize, { Model } from 'sequelize';

class Encaminhamento extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                unidade: Sequelize.STRING,
                endereco_unidade: Sequelize.STRING,
                objetivo: Sequelize.STRING,
                necessidades: Sequelize.STRING,
                obs: Sequelize.TEXT,
                contato: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(model) {
        this.belongsTo(model.User, { foreignKey: 'fk_user_id', as: 'user' });
    }
}
export default Encaminhamento;
