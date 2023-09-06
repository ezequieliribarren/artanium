import React from 'react'
import TopProducts from '../TopProducts/TopProducts'
import Ejemplos from '../Ejemplos/Ejemplos'

const Fotografico_mate = () => {
  return (
    <section id='fotografico-mate'>

{/* FOTOGRAFICO MATE */}
      <TopProducts title="Papel Fotográfico Mate" subtitle="Transferencia óptima / alta definición." p="Lográ plenos parejos con nuestro papel fotográfico mate. Viene en varios formatos y gramajes para adaptarse a tus proyectos." li1={<li><strong>Terminación<br />mate</strong></li>} li2={<li><strong>Secado<br />Instantáneo.</strong></li>} li3={<li><strong>Resistente<br />al Agua.</strong></li>} li4={<li><strong>Alta <br />Resolución.</strong></li>} clase1="col detail" clase2= "col description" />

      <Ejemplos  img1="images/fotografico/ej1.png" img2="images/fotografico/ej2.png" img3="images/fotografico/ej3.png" img4="images/fotografico/ej4.png" img5="images/fotografico/ej5.png" />

      <div className="flex-center">
        <div><img src="images/fotografico/mate1.png" alt="Papel Fotográfico mate" /></div>
        <div> <img src="images/fotografico/mate2.png" alt="Papel Fotográfico mate" /></div>
      </div>
   
    </section>
  )
}

export default Fotografico_mate