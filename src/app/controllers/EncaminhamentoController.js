import Encaminhamento from '../models/Encaminhamento';
import User from '../models/User';

class EncaminhamentoController {
    async store(request, response) {
        const {
            user_id,
            date,
            unidade,
            endereco_unidade,
            objetivo,
            necessidades,
            obs,
            contato,
        } = request.body;
        const create = await Encaminhamento.create({
            date,
            unidade,
            endereco_unidade,
            objetivo,
            necessidades,
            obs,
            contato,
            fk_user_id: user_id,
        });
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
        const list = await Encaminhamento.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                },
            ],
        });
        return response.json(list);
    }

    async render(request, response) {
        const { id } = request.params;
        const encaminha = await Encaminhamento.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'user',
                },
            ],
        });
        return response.json(encaminha);
    }
}

export default new EncaminhamentoController();
