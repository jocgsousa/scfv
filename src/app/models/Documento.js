import Sequelize, { Model } from 'sequelize';

class Documento extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                fk_users_id: Sequelize.INTEGER,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `${process.env.APP_URL}/files/${this.path}`;
                    },
                },
            },
            {
                sequelize,
            }
        );
        return this;
    }
}
export default Documento;
