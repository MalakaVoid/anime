import React from 'react';

import './Home.css';
import SeasonAnime from '../../components/SeasonAnime/SeasonAnime';
import NewAnimes from '../../components/NewAnimes/NewAnimes';

function Home() {
  return (
    <>
        <section className="description">
            <div className="description__container">
                <h1 className="description__title">
                    AnimeORG — информация об аниме онлайн
                </h1>
                <p className="description__text">
                    Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций.
                </p>
                <p className="description__text">
                    Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным. Но у нас есть отличная новость для любителей аниме! Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале. Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.
                </p>
            </div>
        </section>

        <SeasonAnime />

        <NewAnimes />

    </>
  )
}

export default Home