import React, { useRef } from 'react'
import styled from 'styled-components'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import {SmoothHorizontalScrolling} from '../../utils/index'
import { useViewport } from '../hooks/useViewPort'
import { useDispatch } from 'react-redux'
import { setMovieDetail } from '../Store/actions'

const MovieRow = (props) => {
    const {movies, title, isNetflix} = props;
    const sliderRef = useRef();
    const movieRef = useRef();
    const [windowWidth] = useViewport();


    const dispatch = useDispatch();
    const handleSetMovie = (movie) =>{
        dispatch(setMovieDetail(movie))
    }


    const handleScrollRight = () =>{
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if(sliderRef.current.scrollLeft < maxScrollLeft){
            SmoothHorizontalScrolling(sliderRef.current, 250,
            movieRef.current.clientWidth * 2,
            sliderRef.current.scrollLeft)
        } ; 
    }

    const handleScrollLeft = () =>{
        if(sliderRef.current.scrollLeft > 0){
            SmoothHorizontalScrolling(sliderRef.current, 250,
            - movieRef.current.clientWidth * 2,
            sliderRef.current.scrollLeft)
        } ; 
    }
  return (
    <MoviesRow>
    <h1 className='Title'>{title}</h1>
    <MoviesSlider ref={sliderRef} 
        style={
            movies && movies.length > 0
              ? {
                  gridTemplateColumns: `repeat(${movies.length}, ${
                    windowWidth > 1200
                      ? "360px"
                      : windowWidth > 992
                      ? "300px"
                      : windowWidth > 768
                      ? "250px"
                      : "200px"
                  })`,
                }
              : {}
          }
        >
        {
           movies && movies.length > 0 && movies.map((movie, index) => {
            if(movie.poster_path && movie.backdrop_path !== null){
                let imageUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                return(
                    <div key={index} className= 'MovieItem' ref={movieRef}
                     onClick={() => handleSetMovie(movie)}>
                <img src={imageUrl} alt="" />
                <div className='movieName'>{movie.title || movie.name}</div>
            </div> )}})}
   
    </MoviesSlider>
    <div className={`btnLeft ${isNetflix && 'isNetflix'}`} onClick={handleScrollLeft}><AiOutlineDoubleLeft/> </div>
    <div className={`btnRight ${isNetflix && 'isNetflix'}`} onClick={handleScrollRight}><AiOutlineDoubleRight/> </div>
    </MoviesRow>
  )
}

export default MovieRow

const MoviesRow = styled.div`
    background-color: var(--color-black);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%; 
.Title{
    font-size: 18px;
    user-select: none;
}
    .btnLeft{
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.5);
        transform-origin: center;
        cursor: pointer;
        height: 50px;
        width:40px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        

        &:hover{
            background-color:  rgba(0, 0, 0, 0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 40px;
            transition: all 0.3s linear;    
        }
        &.isNetflix{
            height: 100px;
            width: max-content;
        }
    }
    .btnRight{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.5);
        transform-origin: center;
        cursor: pointer;
        height: 50px;
        width:40px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        

        &:hover{
            background-color:  rgba(0, 0, 0, 0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 40px;
            transition: all 0.3s linear;    
        }

        &.isNetflix{
            height: 100px;
            width: max-content;
        }
    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;
    &:hover .movieItem{
        opacity: 0.5;
    }

.MovieItem{
    transform: scale(1);
    max-width(400px);
    max-height(500px);
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;


    &:hover{
        opacity: 1;
        transform: scale(1.1);
        z-index: 10;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .movieName{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        text-align: center;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.7)
    }
}
`;