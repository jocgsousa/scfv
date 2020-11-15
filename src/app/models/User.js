import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      cpf: Sequelize.STRING,
      data_nascimentos: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
      actived: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    return this;
  }
}

export default User;
