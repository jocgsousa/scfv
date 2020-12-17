import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Endereco from '../app/models/Endereco';
import Curso from '../app/models/Curso';
import Documento from '../app/models/Documento';
import Contato from '../app/models/Contato';
import Encaminhamento from '../app/models/Encaminhamento';

const models = [User, Endereco, Curso, Documento, Contato, Encaminhamento];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
        models.map(
            (model) =>
                model.associate && model.associate(this.connection.models)
        );
    }
}
export default new Database();
