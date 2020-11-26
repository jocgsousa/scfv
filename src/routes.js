import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import authMiddlewareProvider from './app/middlewares/auhtProvider';
import EnderecoController from './app/controllers/EnderecoController';
import CursoController from './app/controllers/CursoController';
import DocumentoController from './app/controllers/DocumentoController';

import multerConfig from './config/multerConfig';

const routes = new Router();
const upload = multer(multerConfig);

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

// rota para atualizar endereco dos alunos
routes.put('/endereco/:id', EnderecoController.update);

// rota para deletar endereco dos alunos
routes.delete('/endereco/:id', EnderecoController.delete);

// rota para cadastrar cursos dos alunos
routes.post('/cursos/:id', CursoController.store);

// rota para listar cursos dos alunos
routes.get('/cursos/', CursoController.index);

// rota para deletar cursos dos alunos
routes.delete('/cursos/:id', CursoController.delete);

// rota para armazenar documento e cadstrar a rota para cadastro
routes.post(
    '/documentos/:id',
    upload.single('file'),
    DocumentoController.store
);
// Lista os arquios com seus respectivos link de dowload
routes.get('/documentos/:id', DocumentoController.index);

routes.delete('/documentos/:id', DocumentoController.delete);

export default routes;
