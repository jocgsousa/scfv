import Sequelize, { Model } from 'sequelize';
import {
    differenceInCalendarDays,
    differenceInCalendarMonths,
    format,
} from 'date-fns';

class Curso extends Model {
    static init(sequelize) {
        super.init(
            {
                user_id: Sequelize.INTEGER,
                name: Sequelize.STRING,
                duration: Sequelize.STRING,
                date_init: Sequelize.DATE,
                date_finalized: Sequelize.DATE,
                complete: Sequelize.BOOLEAN,
                orgao: Sequelize.STRING,

                dias: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return differenceInCalendarDays(
                            this.date_finalized,
                            this.date_init
                        );
                    },
                },
                duracao: {
                    type: Sequelize.VIRTUAL,

                    get() {
                        return differenceInCalendarMonths(
                            this.date_init,
                            this.date_finalized
                        );
                    },
                },
                inicio: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return format(this.date_init, 'dd-MM-YYY');
                    },
                },

                fim: {
                    type: Sequelize.VIRTUAL,

                    get() {
                        return format(this.date_finalized, 'dd-MM-YYY');
                    },
                },
            },
            {
                sequelize,
            }
        );
        return this;
    }
}
export default Curso;
