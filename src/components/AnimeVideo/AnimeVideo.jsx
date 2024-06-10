import React, { useEffect, useRef, useState } from 'react';

import './AnimeVideo.css';

function AnimeVideo({ title }) {

    const iframeRef = useRef();

    // const [iframeWidth, setIframeWidth] = useState(iframeRef.offsetWidth);
    
    // useEffect(() => {
    //   const handleWindowResize = () => {
    //     setIframeWidth(iframeRef.current.offsetWidth);
    //   };

    //   console.log(iframeRef)
  
    //   iframeRef.current.addEventListener('resize', handleWindowResize);
  
    //   return () => {
    //     iframeRef.current.removeEventListener('resize', handleWindowResize);
    //   };
    // }, []);


  return (
    <section className="video">
        <div className="video__container">
            <h3 className="video__title">
                {title.russian ? title.russian : title.name}
            </h3>

            <div className="video__content" ref={iframeRef}>
                <iframe 
                className="video__iframe"
                id='player'
                type='text/html'
                src={title.videos[0].player_url} title={title.name}
                ></iframe>
            </div>
        </div>
    </section>
  )
}

export default AnimeVideo