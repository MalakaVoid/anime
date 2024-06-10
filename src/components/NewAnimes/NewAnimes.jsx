import React, { useEffect, useState } from 'react';
import RatingFlag from '../RatingFlag/RatingFlag';
import InfiniteScroll from 'react-infinite-scroll-component';

import './NewAnimes.css';
import { getNewTitles } from '../../api/titles';
import Loader from '../Loader/Loader';

function NewAnimes() {

    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    async function getTitles(){

        let responseAnimes = await getNewTitles(2, page);
        setAnimes(prev => [...prev, ...responseAnimes]);
        console.log(responseAnimes);
        setPage(prev => prev + 1)
        if (page === 6){
            setHasMore(false);
        }
    }

    useEffect(() => {
        // getTitles();
    }, [])

  return (
    <section className="new_animes">
        
        <div className="new_animes__container">
            
            <h3 className='new_animes__title'>Новые аниме на сайте</h3>

            <InfiniteScroll
                dataLength={animes.length}
                loader={<Loader />}
                hasMore={hasMore}
                next={getTitles}
            >

                <div className="new_animes__cards">
                {
                    animes.map(anime =>(
                        <div className="anime_card" key={anime.id}>
                            <div className="anime_card__image">
                                <div className="img" style={{backgroundImage: 'url(https://shikimori.one'+anime.image.original+')'}}></div>
                                <RatingFlag>{`${anime.score}`}</RatingFlag>
                            </div>
                            <div className="anime_card__content">
                                <a href={`/title/${anime.id}`} className="anime_card__title" title={anime.russian === ''? anime.name: anime.russian}>
                                    {anime.russian === ''? anime.name: anime.russian}
                                </a>
                                <p className='anime_card_original_title'>
                                    {anime.name}
                                </p>
                                <div className="anime_card__topics">
                                    {
                                        anime.genres.map((genre)=>(
                                            <>
                                                <a key={genre.id} href={`/genre/${genre.id}`}>{genre.russian}</a>
                                                {genre.id !== anime.genres[anime.genres.length - 1].id && ' / '}
                                            </>
                                        ))
                                    }
                                </div>
                                <p className="anime_card__description">
                                    {anime.description}
                                </p>
                            </div>
                        </div>
                    ))
                }

                </div>
            </InfiniteScroll>

        </div>

    </section>
  )
}

export default NewAnimes