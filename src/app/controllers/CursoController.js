import User from '../models/User';
import Curso from '../models/Curso';

class CursoController {
    async store(request, response) {
        const { id } = request.params;
        const {
            name,
            duration,
            date_init,
            date_finalized,
            orgao,
        } = request.body;
        const user = await User.findByPk(id);

        const curso = await Curso.create({
            id_users: user.id,
            name,
            duration,
            date_init,
            date_finalized,
            complete: false,
            orgao,
        });

        return response.json(curso);
    }

    async index(request, response) {
        const cursos = await Curso.findAndCountAll();
        if (!cursos) {
            return response
                .status(401)
                .json({ error: 'Sem cursos cadastrados no momento' });
        }
        return response.json(cursos);
    }

    async delete(request, response) {
        const { id } = request.params;

        const curso = await Curso.findByPk(id);
        if (!curso) {
            return response
                .status(401)
                .json({ error: 'Curso não existe, na base de dados' });
        }
        await curso.destroy();

        return response.json({ ok: true });
    }

    async update(request, response) {
        const { id } = request.params;

        const curso = await Curso.findByPk(id);

        if (!curso) {
            return response.status(401).json({ error: 'Curso não encontrado' });
        }

        await curso.update(request.body);

        return response.json(curso);
    }
}
export default new CursoController();
