
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Distribuidores from '../Components/Distribuidores/Distribuidores'
import Contacto from '../Components/Contacto/Contacto'
import ProvinciasComponent from '../Components/Donde_comprar.jsx/Donde_comprar'



const Donde_comprar = () => {

    return (

        <Layout>
            <Hero img="" />
            <Distribuidores />
            <ProvinciasComponent />
            <Contacto />
        </Layout>

    )
}

export default Donde_comprar