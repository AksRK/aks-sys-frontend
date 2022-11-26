import style from './style.module.scss'
import {useState} from "react";

const BotNav = () => {
    const [state, setState] = useState(false)

    return (
        // <div className={style.navWrp}>
        //     <div style={state?{height:'200px', width:'60%'}:{}} onClick={()=>setState(!state)} className={style.nav}>
        //         <div style={state?{opacity:'0'}:{opacity:'100'}} className={style.nav__title}>Меню</div>
        //         <ul>
        //             <li>Link</li>
        //             <li>Link</li>
        //             <li>Link</li>
        //             <li>Link</li>
        //             <li>Link</li>
        //         </ul>
        //     </div>
        // </div>
        <div onClick={()=>setState(!state)} className={style.nav}>
            <div className={style.nav__body}>

            </div>
        </div>
    );
};

export default BotNav;