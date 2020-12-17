import Encaminhamento from '../models/Encaminhamento';

class EncaminhamentoController {
    async store(request, response) {
        const create = await Encaminhamento.create(request.body);
        return response.json(create);
    }

    async delete(request, response) {
        const { id } = request.params;
        const encaminhamento = await Encaminhamento.findByPk(id);
        try {
            await encaminhamento.destroy();
        } catch (error) {
            return response
                .status(401)
                .json({ error: 'Falha ao deletar encaminhamentos' });
        }

        return response.json({ ok: true });
    }

    async index(request, response) {
        const list = await Encaminhamento.findAll();
        return response.json(list);
    }
}

export default new EncaminhamentoController();
