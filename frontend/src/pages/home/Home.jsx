import React from 'react'
import styles from './Home.module.css';
import CreateShortURL from '../../components/createShortURL/CreateShortURL';
import ShortUrlList from '../../components/shortUrlList/ShortUrlList';

const Home = () => {
  return (
    <div className={styles.layout}>
      <CreateShortURL/>
      <ShortUrlList/>
    </div>
  )
}

export default Home