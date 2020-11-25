// import User from '../models/User';
import Documento from '../models/Documento';

class DocumentoController {
    async store(request, response) {
        const { id } = request.params;

        const { originalname: name, filename: path } = request.file;

        const documento = await Documento.create({
            name,
            path,
        });

        return response.json(documento);
    }
}

export default new DocumentoController();
