import React, { useEffect, useState } from 'react';

import './Anime.css';
import { useParams } from 'react-router-dom';
import { getTitleById } from '../../api/titles';
import Loader from '../../components/Loader/Loader';
import AnimeRelated from '../../components/AnimeRelated/AnimeRelated';
import AnimeInfoGrid from '../../components/AnimeInfoGrid/AnimeInfoGrid';
import AnimeScreenshoots from '../../components/AnimeScreenshoots/AnimeScreenshoots';
import AnimeVideo from '../../components/AnimeVideo/AnimeVideo';
import AnimeCommon from '../../components/AnimeCommon/AnimeCommon';

function Anime() {

    const {id} = useParams();
    const [title, setTitle] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getTitle(){
        setLoading(true);
        let titleResponse = await getTitleById(id);
        setTitle(titleResponse);
        setLoading(false);
    }

    useEffect(() => {
        getTitle();
    }, []);

  return (
    <section className="anime">
        <div className="anime__container">
            {loading && <Loader />}
            {title && 
            <>    
                <div className="anime_info">
                    <div className="anime_info__left">
                        <div className="anime_info__left_image">
                            <img src={`https://shikimori.one${title.image.original}`} alt="aaa" />
                        </div>
                    </div>
                    <div className="anime_info__right">
                        
                        <div className="anime_info__rating">
                            <svg version="1.0" viewBox="0 0 64 64" enableBackground="new 0 0 64 64"  fill="#000000"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fill="#000000" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"></path> </g></svg>
                            <p>{title.score} <span className='anime_info__rating_small'>/10</span></p>
                        </div>

                        <h1 className='anime_info__title'>{title.russian === ''? title.name: title.russian}</h1>
                        
                        <p className='anime_info__titles'>
                            {title.english} <br />
                            {title.japanese} <br />
                            {title.name}
                        </p>

                        <hr className='delimiter anime_info__delimiter' />

                        <AnimeInfoGrid title={title} />

                    </div>

                </div>

                <p className="anime__description">
                    {title.description}
                </p>

                <AnimeScreenshoots animeId={id} />
                    
                <AnimeRelated animeId={id} />
            </>}
        </div>

        {title && <AnimeVideo title={title} />}

        <AnimeCommon animeId={id} />

    </section>
  )
}

export default Anime