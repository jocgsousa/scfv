import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                duration: Sequelize.STRING,
                date_init: Sequelize.DATE,
                date_finalized: Sequelize.DATE,
                complete: Sequelize.BOOLEAN,
                orgao: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}
export default Curso;