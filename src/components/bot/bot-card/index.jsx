import style from './style.module.scss'
import {Link} from "react-router-dom";

const BotCard = ({href, title, description, imgHref = null}) => {
    return (
        <Link to={href} className={style.botCard}>
            <div className={style.botCard__body}>
                <div className={style.botCard__imgWrp} style={imgHref?{backgroundImage:`url(${imgHref})`}:{}}>
                    {
                        imgHref?<img src={imgHref} alt={title}/>:''
                    }
                </div>
                <h3 className={style.botCard__title}>{title}</h3>
                <span className={style.botCard__description}>{description}</span>
            </div>
        </Link>
    );
};

export default BotCard;