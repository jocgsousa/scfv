import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import authMiddlewareProvider from './app/middlewares/auhtProvider';
import EnderecoController from './app/controllers/EnderecoController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
// Cadastro de beneficiários do SCFV
routes.use(authMiddlewareProvider);

routes.post('/alunos', UserController.store);
routes.get('/alunos', UserController.index);

// rota para ativar aluno
routes.put('/ativar/:id', UserController.ativar);

// rota para desativar aluno
routes.put('/desativar/:id', UserController.desativar);

// rota para atualizar dados do aluno
routes.put('/atualizar/:id', UserController.atualizar);

// rota para cadastra endereco dos alunos
routes.post('/endereco', EnderecoController.store);

export default routes;
