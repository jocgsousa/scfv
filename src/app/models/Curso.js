import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
    static init(sequelize) {
        super.init(
            {
                id_users: Sequelize.INTEGER,
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

    static associate(model) {
        this.belongsTo(model.Users, {
            foreignKey: 'fk_user_id',
            as: 'users',
        });
    }
}
export default Curso;
