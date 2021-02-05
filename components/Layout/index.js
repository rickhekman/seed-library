import './layout.module.css'
import Metadata from '../Metadata';

const Layout = ({ children }) => {
  return (
    <>
      <Metadata />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout;
