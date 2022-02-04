import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>This will be Home Page</h1>
        <Link href='/blogs'>
          <a>Blog's</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
