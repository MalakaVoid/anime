import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './SeasonAnime.css';

import { getLastUpdatedTitles } from '../../api/titles';
import Loader from '../Loader/Loader';
import RatingFlag from '../RatingFlag/RatingFlag';

function SeasonAnime() {

    const [isLoading, setIsLoading] = useState(true);
    const [updatedTitles, setUpdatedTitles] = useState([]);

    async function getTitles(){

        setIsLoading(true);

        let responseData = await getLastUpdatedTitles();
        setUpdatedTitles(responseData);

        setIsLoading(false);

    }

    useEffect(() => {

        getTitles();

    }, [])

  return (
    <section className="season_anime">
        <div className="season_anime__container">

            <h3>Аниме нынешнего сезона</h3>
            <Swiper
                className='season_anime__swiper'
                slidesPerView={'auto'}
                spaceBetween={40}
            >
                {isLoading && <Loader />}
                {
                    updatedTitles && 
                    updatedTitles.map(title => (
                        <SwiperSlide key={title.id}>
                            <div className="season_anime__card">
                                <a href={'/title/' + title.id} className='season_anime__card_img'>
                                    <div className="img" style={{backgroundImage: 'url(https://shikimori.one'+title.image.original+')'}}></div>
                                    <RatingFlag>{`${title.score}`}</RatingFlag>
                                </a>
        
                                <a className='season_anime__card_title' href={'/title/' + title.id}>
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

export default SeasonAnime