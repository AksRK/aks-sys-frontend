import style from './styles.module.scss'
import BotCard from "../../../components/bot/bot-card";
// import BotNav from "../../../components/bot/bot-navigation";
import prevImg from '../../../core/image/video_prev.png'
import coursesImg from '../../../core/image/courses.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../../core/styles/global.scss"
import { Pagination, Navigation, Mousewheel } from "swiper";

const HomeBot = () => {
    return (
        <div className={style.home}>
            {/*<div className={style.home__elem}>*/}
            {/*    <BotCard title={'Открытый урок'}*/}
            {/*             description={'Записаться на открытый урок'}*/}
            {/*             imgHref={prevImg}*/}
            {/*    />*/}
            {/*    <BotCard title={'Наши направления'}*/}
            {/*             description={'Просмотреть направления подготовки'}*/}
            {/*             imgHref={coursesImg}*/}
            {/*    />*/}
            {/*</div>*/}
            <>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={2}
                    spaceBetween={16}
                    loop={false}
                    // navigation={true}
                    modules={[Pagination, Navigation, Mousewheel]}
                    className="mySwiper customSwiperWrp"
                    mousewheel={true}
                    pagination= {{
                        el: '.swiper-pagination',
                        clickable: true,}}
                >
                    <SwiperSlide>
                        <div style={{width:'100%', height:'100%', background:'yellow'}}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={16}
                                loop={false}
                                // navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper "
                                mousewheel={true}
                            >
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'green'}}>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'blue'}}>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'orange'}}>

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{width:'100%', height:'100%', background:'violet'}}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={16}
                                loop={false}
                                // navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper "
                                mousewheel={true}
                            >
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'green'}}>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'blue'}}>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'orange'}}>

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{width:'100%', height:'100%', background:'silver'}}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={16}
                                loop={false}
                                // navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper "
                                mousewheel={true}
                            >
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'green'}}>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'blue'}}>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div style={{width:'80%', height:'80%', background:'orange'}}>

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default HomeBot;