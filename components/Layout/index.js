import './Layout.module.css';
import Metadata from '../Metadata';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <>
      <Metadata />
      <div>
        <main>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;
