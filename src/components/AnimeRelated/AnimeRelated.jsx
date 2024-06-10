import React, { useEffect, useState } from 'react';

import './AnimeRelated.css';
import Loader from '../Loader/Loader';
import { getRelatedAnimes } from '../../api/titles';
import { kinds } from '../../utils/constants';

function AnimeRelated({animeId}) {

    const [isLoading, setIsLoading] = useState(true);
    const [relatedAnime, setRelatedAnime] = useState([]);

    async function getRelatedAnime(){
        setIsLoading(true);
        let responseRelatedAnime = await getRelatedAnimes(animeId);
        setRelatedAnime(responseRelatedAnime);
        setIsLoading(false);
    }

    useEffect(() => {
        getRelatedAnime();
    }, [animeId])

  return (
    <div className='anime_related'>
        <h3 className="anime_related__title">
            Связанное
        </h3>

        <hr className="delimiter" />
        {
            !isLoading && relatedAnime.length !== 0 &&
            <div className="anime_related__container">

                {
                    relatedAnime.map(anime => {
                        if (anime.anime){
                            return (
                                <div key={anime.anime.id} className="anime_related__card">
                                    <a href={`/title/${anime.anime.id}`} className="anime_related__card_title">
                                        {anime.anime.russian}
                                    </a>
                                    <div className="anime_related__card_content">
                                        <div className="anime_related__card_image" style={{backgroundImage: 'url(https://shikimori.one'+anime.anime.image.original+')'}}></div>
                                        <div className='anime_related__card_info'>
                                            {kinds[anime.anime.kind]} / {anime.anime.aired_on.split('-')[0]} <br />
                                            {anime.relation_russian}
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        if (anime.manga){
                            return (
                                <div key={anime.manga.id} className="anime_related__card">
                                    <div className="anime_related__card_title">
                                        {anime.manga.russian}
                                    </div>
                                    <div className="anime_related__card_content">
                                        <div className="anime_related__card_image" style={{backgroundImage: 'url(https://shikimori.one'+anime.manga.image.original+')'}}></div>
                                        <div className='anime_related__card_info'>
                                            Манга / {anime.manga.aired_on.split('-')[0]} <br />
                                            {anime.relation_russian}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div>
        }
        {isLoading && <Loader />}

    </div>
  )
}

export default AnimeRelated