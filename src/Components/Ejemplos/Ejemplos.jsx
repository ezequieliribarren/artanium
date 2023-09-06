import React from 'react'

const Ejemplos = ({img1, img2, img3, img4, img5}) => {
    return (

        <div className="row">
            <ul className='products-ejemplos'>
                <li>Ideales para:</li>
                <li><img src={img1} alt="Ejemplos" /></li>
                <li><img src={img2} alt="Ejemplos" /></li>
                <li><img src={img3} alt="Ejemplos" /></li>
                <li><img src={img4} alt="Ejemplos" /></li>
                <li><img src={img5} alt="Ejemplos" /></li>
            </ul>
        </div>

    )
}

export default Ejemplos