import style from './styles.module.scss'
import BotCard from "../../../components/bot/bot-cards";

const HomeBot = () => {
    return (
        <div className={style.home}>
            <div className={style.home__elem}>
                <BotCard/>
                <BotCard/>
                <BotCard/>
                <BotCard/>
                <BotCard/>
                <BotCard/>
            </div>
        </div>
    );
};

export default HomeBot;