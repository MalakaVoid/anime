import React from 'react';

import './AnimeInfoGrid.css';

import { kinds, statuses } from '../../utils/constants';

function AnimeInfoGrid({title}) {
  return (
    <div className="anime_info__grid">
        {
            title.kind && 
            <>
                <div className="anime_info__grid_name">
                    Тип
                </div>
                <div className="anime_info__grid_value">
                    {kinds[title.kind]}
                </div>
            </>
        }
        {
            title.episodes && 
            <>
                <div className="anime_info__grid_name">
                    Эпизоды
                </div>
                <div className="anime_info__grid_value">
                    {title.episodes_aired ? title.episodes_aired : "?"}/{title.episodes}
                </div>
            </>
        }
        {
            title.genres && !!title.genres.length &&
            <>
                <div className="anime_info__grid_name">
                    Жанр
                </div>
                <div className="anime_info__grid_value anime_info__grid_genres">
                    {
                        title.genres.map((genre, index) =>(
                            <>
                                <a key={genre.id + index} href={`/genre/${genre.id}`}>{genre.russian}</a>
                                {genre.id!== title.genres[title.genres.length - 1].id && ', '}
                            </>
                        ))
                    }
                </div>
            </>
        }
        {
            title.studios && !!title.studios.length &&
            <>
                <div className="anime_info__grid_name">
                    Студия
                </div>
                <div className="anime_info__grid_value">
                    {title.studios && title.studios[0].name}
                </div>
            </>
        }

        {
            title.rating && 
            <>
                <div className="anime_info__grid_name">
                    Рейтинг MPAA
                </div>
                <div className="anime_info__grid_value">
                    {title.rating}
                </div>
            </>
        }

        {
            title.duration && 
            <>
                <div className="anime_info__grid_name">
                    Длительность серии
                </div>
                <div className="anime_info__grid_value">
                    {title.duration} мин.
                </div>
            </>
        }

        {
            title.fandubbers && !!title.fandubbers.length &&
            <>
                <div className="anime_info__grid_name">
                    Озвучка
                </div>
                <div className="anime_info__grid_value">
                    {
                        title.fandubbers.map((fandub) => (
                            <span key={fandub}>{fandub}
                            {fandub !== title.fandubbers[title.fandubbers.length - 1] && ', '}
                            </span>
                        ))
                    }
                </div>
            </>
        }

        {
            title.status &&
            <>
                <div className="anime_info__grid_name">
                    Статус
                </div>
                <div className="anime_info__grid_value">
                    {statuses[title.status]}
                </div>
            </>
        }

    </div>
  )
}

export default AnimeInfoGrid