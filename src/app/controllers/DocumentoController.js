// import User from '../models/User';
import fs from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';
import Documento from '../models/Documento';
import User from '../models/User';

const AsyncUnlink = promisify(fs.unlink);

class DocumentoController {
    async store(request, response) {
        const { id } = request.params;

        const { originalname: name, filename: path } = request.file;

        const documento = await Documento.create({
            name,
            path,
            fk_users_id: id,
        });

        return response.json(documento);
    }

    async index(request, response) {
        const user = await User.findByPk(request.params.id);
        if (!user) {
            return response.status(401).json({ error: 'Usuário não existe' });
        }
        const documentos = await Documento.findAll({
            where: {
                fk_users_id: request.params.id,
            },
        });

        if (documentos.length <= 0) {
            return response.json({ messege: 'Sem documentos anexados' });
        }
        return response.json(documentos);
    }

    async delete(request, response) {
        const documento = await Documento.findByPk(request.params.id);
        if (!documento) {
            return response
                .status(401)
                .json({ error: 'Arquivo não encontrado' });
        }

        const caminho = resolve(
            __dirname,
            '..',
            '..',
            '..',
            'tmp',
            'uploads',
            documento.path
        );
        try {
            await AsyncUnlink(caminho);
            await documento.destroy();
        } catch (error) {
            return response
                .status(401)
                .json({ error: 'Falha ao deletar arquivo!' });
        }

        return response.json({ ok: true });
    }
}

export default new DocumentoController();
