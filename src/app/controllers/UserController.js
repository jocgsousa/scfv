import User from '../models/User';

class UserController {
  async store(request, response) {
    const userExists = await User.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (userExists) {
      return response.status(400).json({ error: 'Usuário já existe na base de dados' });
    }

    const user = await User.create(request.body);

    return response.json(user);
  }
}
export default new UserController();
