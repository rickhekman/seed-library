import styles from './Header.module.css';
import Nav from '../Nav';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <h2 className={styles.containertitle}>
            Seed Library
          </h2>
        </Link>
      </div>
    
    <div>
      <Nav />
    </div>
    </div>
  )
};

export default Header;
