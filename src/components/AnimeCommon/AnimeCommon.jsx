import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './AnimeCommon.css';

import { getSimmilarAnimes } from '../../api/titles';
import Loader from '../Loader/Loader';
import RatingFlag from '../RatingFlag/RatingFlag';

function AnimeCommon({animeId}) {

    const [isLoading, setIsLoading] = useState(true);
    const [updatedTitles, setUpdatedTitles] = useState([]);

    async function getTitles(){

        setIsLoading(true);

        let responseData = await getSimmilarAnimes(animeId);
        setUpdatedTitles(responseData);

        setIsLoading(false);

    }

    useEffect(() => {

        getTitles();

    }, [])

  return (
    <section className="anime_common">
        <div className="anime_common__container">

            <h3>Похожие аниме</h3>
            <Swiper
                className='anime_common__swiper'
                slidesPerView={'auto'}
                spaceBetween={40}
            >
                {isLoading && <Loader />}
                {
                    updatedTitles && 
                    updatedTitles.map(title => (
                        <SwiperSlide key={title.id}>
                            <div className="anime_common__card">
                                <a href={'/title/' + title.id} className='anime_common__card_img'>
                                    <div className="img" style={{backgroundImage: 'url(https://shikimori.one'+title.image.original+')'}}></div>
                                    <RatingFlag>{`${title.score}`}</RatingFlag>
                                </a>
        
                                <a className='anime_common__card_title' href={'/title/' + title.id} title={title.russian === ''? title.name: title.russian}>
                                    {title.russian === ''? title.name: title.russian}
                                </a>
                            </div>
                        </SwiperSlide>
                    ))

                }

            </Swiper>
        </div>
    </section>
  )
}

export default AnimeCommon