import Sequelize, { Model } from 'sequelize';

class Contato extends Model {
    static init(sequelize) {
        super.init(
            {
                tel_fixo: Sequelize.STRING,
                tel_celular: Sequelize.STRING,
                tel_celular2: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}
export default Contato;
