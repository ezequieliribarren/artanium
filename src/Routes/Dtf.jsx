import { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Buttons from '../Components/Buttons/Buttons'
import Dtf_products from '../Components/Dtf_products/Dtf_products'
import CallAction from '../Components/CallAction/CallAction'
import CallComunidad from '../Components/CallComunidad/CallComunidad'
import { HashLink as Link } from 'react-router-hash-link';

const Dtf = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Hero image="images/Dtf/header.png" tablet="images/Dtf/header-tablet.png" mobile="images/Dtf/header-mobile.png" />
      <Buttons button1={<Link className="nav-link" smooth to="/dtf/#tintas-dtf"><button>Tintas</button>
      </Link>} button2={<Link className="nav-link" smooth to='/dtf/#film-dtf'>
        <button>Film</button>
      </Link>}
        button3={<Link className="nav-link" smooth to='/dtf/#polvo-dtf'>
          <button>Polvo</button>
        </Link>} clase="buttons" />
      <Dtf_products />
      <CallAction />
      <CallComunidad />
    </Layout>
  )
}

export default Dtf