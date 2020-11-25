import User from '../models/User';
import Curso from '../models/Curso';

class CursoController {
    async store(request, response) {
        const { id } = request.params;
        const user = await User.findByPk(id);

        const curso = await Curso.create(request.body);

        user.fk_cursos_id = curso.id;

        await user.save();

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
}
export default new CursoController();
