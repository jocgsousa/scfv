import User from '../models/User';
import Contato from '../models/Contato';

class ContatoController {
    async store(request, response) {
        const { id_user } = request.body;
        const user = await User.findByPk(id_user);
        const data = await Contato.create(request.body);

        user.fk_contatos_id = data.id;
        user.save();
        return response.json(data);
    }

    async update(request, response) {
        const { id } = request.body;

        const contato = await Contato.findByPk(id);
        if (!contato) {
            return response
                .status(401)
                .json({ error: 'Contato não cadastrado, ou excluído' });
        }
        await contato.update(request.body);

        return response.json(contato);
    }

    async delete(request, response) {
        const { id } = request.params;
        const contato = await Contato.findByPk(id);

        if (!contato) {
            return response
                .status(401)
                .json({ error: 'Erro, contato nao encontrado' });
        }

        await contato.destroy();

        return response.json({ ok: true });
    }
}
export default new ContatoController();
