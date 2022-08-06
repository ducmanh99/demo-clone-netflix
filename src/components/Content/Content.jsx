import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieRow from './MovieRow';
import {HiOutlineArrowCircleUp} from 'react-icons/hi';
import * as ACTIONS from '../Store/actions';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';


const ScrollToTop = () =>{
  scroll.scrollToTop();
}

const Content = (props) => {
  const dispatch = useDispatch();
  const { NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector(state => state.infoMovies)
  useEffect(() => {
    dispatch(ACTIONS.getNetflixOriginals())
    dispatch(ACTIONS.getTrendingMovies())
    dispatch(ACTIONS.getTopRatedMovies())
    dispatch(ACTIONS.getActionMovies())
    dispatch(ACTIONS.getComedyMovies())
    dispatch(ACTIONS.getHorrorMovies())
    dispatch(ACTIONS.getRomanceMovies())
    dispatch(ACTIONS.getDocumentaries())
  },[dispatch]);
 
  return (
    <div> 
    <MovieRow movies={NetflixOriginals} title="NetFlix Originals" isNetflix={true}/> 
    <MovieRow movies={TrendingMovies} title="Trending Movies"/>
    <MovieRow movies={TopRatedMovies} title="Top Rated Movies"/>
    <MovieRow movies={ActionMovies} title="Action Movies"/>
    <MovieRow movies={ComedyMovies} title="Comedy Movies"/>
    <MovieRow movies={HorrorMovies} title="Horror Movies"/>
    <MovieRow movies={RomanceMovies} title="Romance Movies"/>
    <MovieRow movies={Documentaries} title="Documentaries"/>
    <ButtonTop onClick={() => ScrollToTop() }>
      <HiOutlineArrowCircleUp/>
    </ButtonTop>
    </div>
  )
}

export default Content

const ButtonTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s linear;

  &:hover{
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 600px) {
    right: 40px;
  }
`