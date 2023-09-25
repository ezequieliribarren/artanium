import React from 'react'

const CallComunidad = () => {
    return (
        <section className='call-action call-comunidad'>
            <h2>Ideas, Tutoriales y más</h2>
         <p className='container text-center'>
         En Artanium, nos enorgullece ofrecer una amplia gama de productos para apoyar el crecimiento y la creatividad de tu negocio. Por eso, hemos creado esta sección, donde podrán encontrar una gran variedad de recursos, como ideas, tutoriales y mucho más, para ayudarlos a maximizar su potencial creativo. 
         </p>
         <p className='container p-bold text-center'>
         ¡Hacé click y descubrí todo lo que tenemos para ofrecer!
         </p>
         <button className='button'>Comunidad</button>
         <div className='redes'>
            <a href=""><img src="images/face.png" alt="" /></a>
            <a href=""><img src="images/insta.png" alt="" /></a>
         </div>
        </section>

    )
}

export default CallComunidad