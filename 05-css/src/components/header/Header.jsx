import React from 'react'
// import '../styles/Header.css'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      I'm header 
      <button className={styles.btn}>click me</button>
    </div>
  )
}

export default Header
