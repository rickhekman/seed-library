import styles from './Header.module.css';
import Nav from './Nav';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          Seed Library
        </h1>
      </div>
    
    <div>
      <Nav />
    </div>
    </div>
  )
}

export default Header
