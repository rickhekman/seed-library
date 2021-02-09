import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          Seed Library
        </h1>
      </div>
    
    <div>
      <button className="btn btn--black">Locations</button>
    </div>
    </div>
  )
}

export default Header
