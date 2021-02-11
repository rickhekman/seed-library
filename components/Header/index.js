import styles from './Header.module.css';
import Nav from './Nav';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>
          Seed Library
        </h2>
      </div>
    
    <div>
      <Nav />
    </div>
    </div>
  )
}

export default Header
