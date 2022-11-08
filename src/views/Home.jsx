import React from 'react';
import Loading from '../components/Loading/Loading';
import { useInfo } from '../hook/useInfo';
import CharacterList from '../components/CharacterList/CharacterList'
import './home.css'

const Home = () => {
  const {page, isLoading} = useInfo();

  return (
    <div className='home'>
      <div className='home-background'>
        {
          isLoading
           ? <Loading/>
           : <CharacterList info={page.results}/>
        }
      </div>
    </div>
  )
}

export default Home