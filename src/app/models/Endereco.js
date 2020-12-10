import Sequelize, { Model } from 'sequelize';

class Endereco extends Model {
    static init(sequelize) {
        super.init(
            {
                cep: Sequelize.STRING,
                bairro: Sequelize.STRING,
                rua: Sequelize.STRING,
                cidade: Sequelize.STRING,
                estado: Sequelize.STRING,
                referencia: Sequelize.STRING,
                numero: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}
export default Endereco;
