import { format, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import User from '../models/User';
import Endereco from '../models/Endereco';
import Contato from '../models/Contato';

class UserController {
    // Cadatrao de usuários
    async store(request, response) {
        const checkEmailExists = await User.findOne({
            where: {
                email: request.body.email,
            },
        });

        if (checkEmailExists) {
            return response
                .status(400)
                .json({ error: 'E-mail já existe na base de dados' });
        }

        const checkCPFExists = await User.findOne({
            where: {
                cpf: request.body.cpf,
            },
        });

        if (checkCPFExists) {
            return response
                .status(400)
                .json({ error: 'CPF já existe na base de dados' });
        }

        const user = await User.create(request.body);

        return response.json(user);
    }

    // listagem de usuários
    async index(request, response) {
        const alunosAtivados = await User.findAndCountAll({
            where: {
                provider: false,
                actived: true,
            },
            include: [
                {
                    model: Endereco,
                    as: 'endereco',
                },
                {
                    model: Contato,
                    as: 'contato',
                },
            ],
        });

        const alunosDesativados = await User.findAndCountAll({
            where: {
                provider: false,
                actived: false,
            },
            include: [
                {
                    model: Endereco,
                    as: 'endereco',
                },
            ],
        });

        return response.json({
            alunosAtivados,
            alunosDesativados,
        });
    }

    async ativar(request, response) {
        const { id } = request.params;

        const aluno = await User.findByPk(id, {
            attributes: ['id', 'name', 'email', 'cpf'],
        });

        if (!aluno) {
            return response
                .status(401)
                .json({ error: 'Aluno, não encontrado!' });
        }

        aluno.actived = true;

        await aluno.save();

        return response.json(aluno);
    }

    async desativar(request, response) {
        const { id } = request.params;

        const aluno = await User.findByPk(id, {
            attributes: ['id', 'name', 'email', 'cpf'],
        });

        if (!aluno) {
            return response
                .status(401)
                .json({ error: 'Aluno, não encontrado!' });
        }

        aluno.actived = false;

        await aluno.save();

        return response.json(aluno);
    }

    async atualizar(request, response) {
        const { id } = request.body;
        // Buscamos as informações do aluno com o id recebido
        const aluno = await User.findByPk(id);
        // Verificamos se o e-mail recebido e dfirente do que já está cadastrado
        if (aluno.email !== request.body.email) {
            // Fazemos uma varredura em todos o usuários cadastrado se já usam este e-mail recebido
            const checkEmail = await User.findOne({
                where: {
                    email: request.body.email,
                },
            });
            //   Se já exisitir este e-mail cadastrado, retornamos um staus bad
            if (checkEmail) {
                return response
                    .status(401)
                    .json({ error: 'Conta de e-mail já está em uso' });
            }
            // Caso contrário continuamos com a requisição
        }

        if (aluno.cpf === request.body.cpf) {
            // Fazemos uma varredura em todos o usuários cadastrado se já usam este e-mail recebido
            const checkCPF = await User.findOne({
                where: {
                    cpf: request.body.cpf,
                },
            });
            // Se já exisitir este CPF cadastrado, retornamos um staus bad
            if (checkCPF) {
                return response
                    .status(401)
                    .json({ error: 'CPF já está em uso' });
            }
            // Caso contrário continuamos com a requisição
        }

        const alunoData = await aluno.update(request.body);

        return response.json(alunoData);
    }

    async search(request, response) {
        const { id } = request.params;
        const {
            name,
            email,
            cpf,
            phone,
            data_nascimento,
            sexo,
            endereco,
            contato,
        } = await User.findOne({
            where: {
                id,
            },
            include: [
                {
                    model: Endereco,
                    as: 'endereco',
                },
                {
                    model: Contato,
                    as: 'contato',
                },
            ],
        });

        const user = await User.findByPk(id);

        if (!name) {
            return response
                .status(401)
                .json({ error: 'Usuário não encontrado' });
        }
        const formatedDate = format(
            addDays(user.data_nascimento, 1),
            'YYY-MM-dd',
            {
                locale: pt,
            }
        );

        return response.json({
            id,
            name,
            email,
            cpf,
            phone,
            data_nascimento,
            formatedDate,
            sexo,
            endereco,
            contato,
        });
    }
}
export default new UserController();
