import style from './style.module.scss'

const BotCard = () => {
    return (
        <div className={style.botCard}>
            <div className={style.botCard__body}>
                <div className={style.botCard__imgWrp}>

                </div>
                <h3 className={style.botCard__title}>Title</h3>
                <span className={style.botCard__description}>Description</span>
                <a href="https://www.npmjs.com/">test</a>
            </div>
        </div>
    );
};

export default BotCard;