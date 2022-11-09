import React, {useState} from 'react';
import Loading from '../components/Loading/Loading';
import { useInfo } from '../hook/useInfo';
import CharacterList from '../components/CharacterList/CharacterList'
import './home.css'
import Header from '../components/Header/Header';
import { BASE_URL } from '../services/BASE_URL';


const Home = () => {
  const [url, setUrl] = useState(BASE_URL);
  const {page, isLoading} = useInfo(url);

  
  const handleSearch = (e) => {
    setTimeout(() => {
      let newURL = BASE_URL;
      newURL += e.target.value !== '' ? `/?name=${e.target.value}` : '';
      setUrl(newURL);
    }, 1000);
  }

  const handlePagination = (newURL) => {
     if (newURL !== null){
      setUrl(newURL);
    }
  }

  return (
    <div className='home'>
      <Header handleSearch={handleSearch} pagination={page.info} handlePagination={handlePagination}/>
      <div className='home-background'>
        {
          isLoading
           ? <Loading/>
           : 
             <CharacterList info={page.results}/>
        }
      </div>
    </div>
  )
}

export default Home