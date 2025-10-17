import React from 'react'
import styles from './Search.module.css'

const Search = () => {
  return (
   <div className={styles.searchContainer}>
  <img src="/Search.png" alt='Search' className={styles.icon} />
  <input
    type='text'
    placeholder='Search a song of your choice'
    className={styles.searchInput}
  />
</div>

  )
}
 
export default Search
