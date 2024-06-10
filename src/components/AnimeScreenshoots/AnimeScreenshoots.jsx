import React, { useEffect, useState } from 'react';

import './AnimeScreenshoots.css';
import { getAnimeScreenshots } from '../../api/titles';

function AnimeScreenshoots({animeId}) {

    const [loading, setLoading] = useState(true);
    const [screenshots, setScreenshots] = useState([]);

    async function getScreenshots(){
        
        setLoading(true);
        let screenshotsResponse = await getAnimeScreenshots(animeId);
        let fillteredResponse = screenshotsResponse.filter((item, index) => index < 8)
        setScreenshots(fillteredResponse);
        setLoading(false);

    }

    useEffect(() => {

        getScreenshots();

    }, [animeId])

  return (
    <div className="anime_screenshots">
        <h3 className="anime_screenshots__title">
            Кадры
        </h3>
        <div className="anime_screenshots__container">
            {
                screenshots.map((screenshot, index) => (
                    <img key={index} src={`https://shikimori.one${screenshot.original}`} alt={`Anime ${animeId} screenshot ${index}`} loading='lazy' />
                ))
            }
        </div>
    </div>
  )
}

export default AnimeScreenshoots