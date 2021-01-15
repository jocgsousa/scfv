import Sequelize, { Model } from 'sequelize';
import { differenceInISOWeekYears } from 'date-fns';

import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                paif: Sequelize.STRING,
                nis: Sequelize.STRING,
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                cpf: Sequelize.STRING,
                rg: Sequelize.STRING,
                sexo: Sequelize.STRING,
                data_nascimento: Sequelize.STRING,
                naturalidade: Sequelize.STRING,
                name_mae: Sequelize.STRING,
                name_resp: Sequelize.STRING,
                cpf_resp: Sequelize.STRING,
                rg_resp: Sequelize.STRING,
                turno: Sequelize.STRING,
                situacao: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
                actived: Sequelize.BOOLEAN,

                idade: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return differenceInISOWeekYears(
                            new Date(),
                            this.data_nascimento
                        );
                    },
                },
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

        this.belongsTo(model.Contato, {
            foreignKey: 'fk_contatos_id',
            as: 'contato',
        });
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;
