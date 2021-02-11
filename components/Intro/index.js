import styles from './Intro.module.css';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
      <Image
        alt="seedlibrary"
        src="/images/seedlibrary.jpg" 
        width={800}
        height={620}
        class="rounded-lg"
      />
      </div>
      <div>
        <h1 className={styles.slogan}>
        Our purpose is to disseminate plant seed to the public, propagation and further sharing.
        </h1>
      </div>
    </div>
  )
}

export default Intro;