import React, { useEffect, useState } from 'react'
import Content from '../Content/Content'
import Intro from '../Intro/Intro'
import MoviesDetail from '../MoviesDetail/MoviesDetail'
import { useSelector } from 'react-redux'
import SearchMovies from '../SearchMovies/SearchMovies'
import { BrowserRouter } from 'react-router-dom'

const Home = (props) => {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

    useEffect(()=>{
        setIsShowMovieDetail(MovieDetail ? true : false)
    },[MovieDetail])
  return (
    <div>

        <Intro/>
			<Content />
			<MoviesDetail
				movie={MovieDetail}
				showModal={isShowMovieDetail}
			/>
      <SearchMovies/>
    </div>
  )
}

export default Home