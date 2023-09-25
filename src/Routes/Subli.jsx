import { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Subli_tintas from '../Components/Subli_tintas/Subli_tintas'
import Subli_papeles from '../Components/Subli_papeles/Subli_papeles'
import CallAction from '../Components/CallAction/CallAction'
import Separador from '../Components/Separador/Separador'
import Subli_plotter from '../Components/Subli_plotter/Subli_plotter'
import Subli_protector from '../Components/Subli_protector/Subli_protector'
import CallComunidad from '../Components/CallComunidad/CallComunidad'
import Buttons from '../Components/Buttons/Buttons'
import { HashLink as Link } from 'react-router-hash-link';
import Linea from '../Components/Linea/Linea'

const Subli = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Hero image="images/subli/header.png" tablet="images/subli/header-tablet.png" mobile="images/subli/header-mobile.png" />
            <Buttons button1={<Link className="nav-link" smooth to="/sublimacion/#tintas-sublimacion"><button>Tintas</button>
            </Link>} button2={<Link className="nav-link" smooth to='/sublimacion/#papeles-sublimacion'>
                <button>Papeles</button>
            </Link>} clase="buttons-orange" />
            <Subli_tintas />
            <Linea/>
            <Subli_papeles />
            <Separador title="Papeles para sublimación para plotter" />
            <Subli_plotter />
            <Separador title="Papel protector para calandra" />
            <Subli_protector />
            <CallAction />
            <CallComunidad />
        </Layout>
    )
}

export default Subli