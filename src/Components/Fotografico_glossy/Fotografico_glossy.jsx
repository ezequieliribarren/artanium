import React from 'react'
import TopProducts from '../TopProducts/TopProducts'
import Ejemplos from '../Ejemplos/Ejemplos'

const Fotografico_glossy = () => {
  return (
    <section id='fotografico-glossy'>
   <TopProducts title="Papel Fotográfico Glossy" subtitle="Transferencia óptima / alta definición." p="Nuestros papeles fotográficos glossy no dejan huella. Viene en varios formatos y gramajes para adaptarse a tus proyectos." li1={<li><strong>Terminación<br />Brillante.</strong></li>} li2={<li><strong>Secado<br />Instantáneo.</strong></li>} li3={<li><strong>Resistente<br />al Agua.</strong></li>} li4={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col detail" clase2= "col description"  />
      
      <Ejemplos  img1="images/fotografico/ej6.png" img2="images/fotografico/ej7.png" img3="images/fotografico/ej8.png" img4="images/fotografico/ej9.png" img5="images/fotografico/ej10.png" />

      <div className='flex-column-center'>
        <div><img src="images/fotografico/glossy1.png" alt="Papel Fotográfico Glossy" /></div>
        <div> <img src="images/fotografico/glossy2.png" alt="Papel Fotográfico Glossy" /></div>
      </div>
    </section>
  )
}

export default Fotografico_glossy