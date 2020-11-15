import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return response.status(401).json({ error: 'E-mail não cadastrados' });
    }
  }
}
export default new SessionController();
