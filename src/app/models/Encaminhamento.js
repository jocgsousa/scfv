import Sequelize, { Model } from 'sequelize';

class Encaminhamento extends Model {
    static init(sequelize) {
        super.init(
            {
                user_id: Sequelize.INTEGER,
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
}
export default Encaminhamento;
