import React, { useState, useEffect } from 'react'
import coverImg from '../../assets/cover1.jpg'
import axios from 'axios';
import './Home.scss';
import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
const imgUrl = 'https://image.tmdb.org/t/p/original'



// const axios = require('axios');



const Cards = ({ img }) => {
  return (
    <img className='card' src={img} alt="cover" />
  )
}

const Row = ({ title, arr = [] }) => {
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div >
        {
          arr.map((item, index) => (
            <Cards key={index} img={`${imgUrl}${item.poster_path}`} />
          ))
        }
      </div>

    </div>
  )
}

const Home = () => {
  const [upcomingMovie, setUpcomingMovie] = useState([])
  const [nowPlayingMovie, setNowPlayingMovie] = useState([])
  const [topRated, setTopRated] = useState([])
  const [popular, setPopular] = useState([])



  useEffect(() => {

    const fectchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=39e146898ec3f2f335b8b4d3008dcfcf')
      setUpcomingMovie(results);
      console.log("data is =>", upcomingMovie);

    }
    const fectchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=39e146898ec3f2f335b8b4d3008dcfcf')
      setNowPlayingMovie(results);
      console.log("nowplaying is =>", nowPlayingMovie);
    }
    const fectchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=39e146898ec3f2f335b8b4d3008dcfcf')
      setTopRated(results);
      console.log("toprated is =>", topRated);
    }
    const fectchPopular = async () => {
      // console.log("Fetching upcoming movies...");     
      const {
        data: { results },
      } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=39e146898ec3f2f335b8b4d3008dcfcf')
      setPopular(results);
      console.log("popular is =>", popular);


    }

    fectchUpcoming(),
      fectchNowPlaying(),
      fectchTopRated(),
      fectchPopular()

  }, [])

  return (
    <section className="home">
      <div className="banner"
        style={(upcomingMovie.length > 0) ? { backgroundImage: `url(${`${imgUrl}${upcomingMovie[2].poster_path}`})` } : { coverImg }
        }>
        {upcomingMovie[2] && <h1>{upcomingMovie[2].original_title}</h1>}
        {upcomingMovie[2] && <p>{upcomingMovie[2].overview}</p>}
        <div>
          <button><BiPlay /> Play</button>
          <button>My List <AiOutlinePlus /></button>
        </div>

      </div>
      <Row title="Upcoming Movies on Netflix" arr={upcomingMovie} />
      <Row title="NowPlaying on Netflix" arr={nowPlayingMovie} />
      <Row title="TopRated Movies on Netflix" arr={topRated} />
      <Row title="Popular Movies on Netflix" arr={popular} />


    </section>
  )
}

export default Home