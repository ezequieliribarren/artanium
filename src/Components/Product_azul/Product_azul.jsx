import React from 'react'
import Ul_azul from '../Ul_azul/Ul_azul'
import Slider_products from '../Slider_products/Slider_products'


const Product_azul = ({ a1, a2, a3, b1, b2, b3, c1, c2, c3, img, clase, imgtop1, imgtop2, imgtop3, imgtop4, ideales, slider1, slider2, slider3, slider4, slider5 }) => {
    return (
        <div className="container-fluid">
            <div className='row product-azul'>
                <div className="col-lg-6">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className="col-lg-6">
                    <div className='img-top-transfer'>
                        <div>
                            <img src={imgtop1} alt="" /><img src={imgtop2} alt="" /><img  src={imgtop3} alt="" />
                        </div>
                        <div>
                            <img className='img-ycmn' src={imgtop4} alt="" />
                        </div>
                    </div>
                    <Ul_azul a1={a1} a2={a2} a3={a3} b1={b1} b2={b2} b3={b3} c1={c1} c2={c2} c3={c3} clase={clase} />
                </div>
                <Slider_products img1={slider1} img2={slider2} img3={slider3} img4={slider4} img5={slider5} ideales= {ideales} /> 
            </div>
        </div>

    )
}

export default Product_azul