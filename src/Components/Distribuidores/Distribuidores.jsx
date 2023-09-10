import React from 'react'

const Distribuidores = () => {
  return (
    <section id='distribuidores'>
      <div className="container">
        <h2 className='margin-title'>Confían en nosotros +100 distribuidores</h2>
        <h3>De la mano de nuestros más de 100 distribuidores llegamos a cada parte del país</h3>
    <div className="row distribuidores-logos">
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img1.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img2.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img3.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img4.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img5.png" alt="" /></div>
        <div className="col-md-4 col-sm-6"><img src="/images/distribuidores/img1.png" alt="" /></div>
    </div>
        <div className="row action-distribuidores">
          <div className='buttons-distribuidores'>
            <button className='button-celeste'>Ser Distribuidor</button>
            <button>Donde Comprar</button>
          </div>
        </div>
      </div>
      <div className="forma-parte">
        <h2>Formá Parte de Nuestra Comunidad</h2>
        <div className=' p-forma-parte'>
          <p>En Artanium, nos enorgullece ofrecer una amplia gama de productos para apoyar el crecimiento y la creatividad de tu negocio. Por eso, hemos creado esta sección, donde podrán encontrar una gran variedad de recursos, como ideas, tutoriales y mucho más, para ayudarlos a maximizar su potencial creativo. </p>
          <p>¡Hacé click y descubrí todo lo que tenemos para ofrecer!</p>
        </div>
        <div className='button-forma-parte'>
          <button className='button-celeste-blank'>Comunidad</button>
        </div>

        <div className='redes-distribuidores'>
          <a href=""><img src="/images/distribuidores/instagram.png" alt="Instagram" /></a>
          <a href=""><img src="/images/distribuidores/facebook.png" alt="Facebook" /></a>
        </div>
      </div>
    </section>
  )
}

export default Distribuidores