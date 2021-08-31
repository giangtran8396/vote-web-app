import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { VoteList } from '../modules/Vote/components';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <VoteList />
    </div>
  )
}

export default Home
