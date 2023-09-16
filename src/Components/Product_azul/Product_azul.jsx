import React from 'react'
import Ul_azul from '../Ul_azul/Ul_azul'
import Slider_products from '../Slider_products/Slider_products'


const Product_azul = ({ a1, a2, a3, b1, b2, b3, c1, c2, c3, img, clase }) => {
    return (
        <div className="container-fluid">
            <div className='row product-azul'>
                <div className="col-lg-6">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className="col-lg-6">
                    <Ul_azul a1={a1} a2={a2} a3={a3} b1={b1} b2={b2} b3={b3} c1={c1} c2={c2} c3={c3} clase={clase} />
                </div>
                <Slider_products img1="images/transfer/slider1.png" img2="images/transfer/slider1.png" img3="images/transfer/slider1.png" img4="images/transfer/slider1.png" img5="images/transfer/slider1.png" />
            </div>
        </div>

    )
}

export default Product_azul