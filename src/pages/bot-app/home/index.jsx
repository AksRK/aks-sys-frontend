import style from './styles.module.scss'
import BotCard from "../../../components/bot/bot-card";
import BotNav from "../../../components/bot/bot-navigation";
import prevImg from '../../../core/image/video_prev.png'
import coursesImg from '../../../core/image/courses.png'

const HomeBot = () => {
    return (
        <div className={style.home}>
            <div className={style.home__elem}>
                <BotCard title={'Открытый урок'}
                         description={'Записаться на открытый урок'}
                         imgHref={prevImg}
                />
                <BotCard title={'Наши направления'}
                         description={'Просмотреть направления подготовки'}
                         imgHref={coursesImg}
                />
            </div>
        </div>
    );
};

export default HomeBot;