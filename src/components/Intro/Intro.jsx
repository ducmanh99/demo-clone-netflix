import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {FaVolumeMute } from 'react-icons/fa'
import {GoUnmute} from 'react-icons/go'
import styled from 'styled-components'

const Intro = () => {
    const [isMuted, setIsMuted] = useState(false);

  return (
    <IntroContainer>
        <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/273686020"
        className="VideoIntro"
        />
        <div className='contentIntro'>
            <h1 className='heading'>NETFLIX The Rain</h1>
            <p className='overview'>Trailer for Netflix series: " The Rain ",
            Production: Fox Devil Films GmBH for Netflix Amsterdam,
            Director: Simon Ritzler,
            Dop: Carlo Jelavic,
            Editor: Micheal Timmers,
            Colorist: Mike Bothe,
            Compositing: Stathis Nafpliotis.
            </p>
        </div>
            {
            isMuted ? (<FaVolumeMute className='btnVolume' onClick={() => setIsMuted(prev => !prev)}/>) :
            (<GoUnmute className='btnVolume' onClick={() =>setIsMuted(prev => !prev)}/>)
}
<div className='fadeBottom'>

</div>
        </IntroContainer>
  )
}

export default Intro

const IntroContainer = styled.div`
background-color: var(--color-black);
position: relative;
color: var(--color-white);
padding-top: 56%;

.VideoIntro{
    position: absolute;
    top: 0;
    left: 0;
}
.contentIntro{
    position: absolute;
    top: 140px;
    left: 30px;

    @media screen and (max-width: 800px){
        top: 120px;
        left: 25px;
    }
    @media screen and (max-width: 600px){
        top: 100px;
        left: 15px;
    }
    .heading{
        font-size: 60px;
        transition: all 0.3s ease;

        @media screen and (max-width: 800px){
            font-size: 40px;
        }
        @media screen and (max-width: 600px){
            font-size: 24px;
        }
    }
    .overview{
        max-width: 550px;
        width: 100%;
        line-height: 30px;
        margin-top: 25px;
        font-size: 18px;
        
        @media screen and (max-width: 800px){
            font-size: 16px;
        }
        @media screen and (max-width: 600px){
            font-size: 14px;
        }
    }
}
.btnVolume{
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top:50%;
    cursor: pointer;
    padding: 6px;
    color: #bbb;
    border-radius: 50%;
    border: #fff solid 1px;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover{
        color: #fff ;
        transform: scale(1.2)
        background-color: rgba(211, 211, 211, 0.18)
    }
    @media screen and (max-width: 800px){
        height: 30px;
        width: 30px;
        padding: 4px;
    }
    @media screen and (max-width: 600px){
        height: 20px;
        width: 20px;
        padding: 1px;
    }

}
.fadeBottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
   
}
`;