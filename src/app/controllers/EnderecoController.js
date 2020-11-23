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
}
export default new EnderecoController();
