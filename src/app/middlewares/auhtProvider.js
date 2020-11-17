import User from '../models/User';

export default async (request, response, next) => {
  const { userId } = request;

  const isProvider = await User.findOne({
    where: {
      id: userId,
      provider: true,
    },
  });

  if (!isProvider) {
    return response.status(401).json({ error: 'Operação negada, somente autenticados' });
  }

  return next();
};
