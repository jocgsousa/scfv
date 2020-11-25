import User from '../models/User';
import Endereco from '../models/Endereco';

class EnderecoController {
    async store(request, response) {
        const { id } = request.body;

        const user = await User.findByPk(id);

        const endereco = await Endereco.create(request.body);

        user.fk_enderecos_id = endereco.id;

        await user.save();

        return response.json(user);
    }

    async update(request, response) {
        const { id } = request.params;

        const endereco = await Endereco.findByPk(id);

        await endereco.update(request.body);

        return response.json(endereco);
    }

    async delete(request, response) {
        const { id } = request.params;

        const endereco = await Endereco.findByPk(id);

        if (!endereco) {
            return response
                .status(401)
                .json({ error: 'Endereco não encontrado!' });
        }

        await endereco.destroy();

        return response.json({ ok: true });
    }
}
export default new EnderecoController();
