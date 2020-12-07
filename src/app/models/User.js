import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import { format, parseISO } from 'date-fns';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                phone: Sequelize.STRING,
                cpf: Sequelize.STRING,
                sexo: Sequelize.STRING,
                data_nascimento: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
                actived: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });
        return this;
    }

    static associate(model) {
        this.belongsTo(model.Endereco, {
            foreignKey: 'fk_enderecos_id',
            as: 'endereco',
        });
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;
