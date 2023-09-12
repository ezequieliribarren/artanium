import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider_products = ({ img1, img2, img3, img4, img5 }) => {
    var settings = {
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 3000,                    
                }
              },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            }
        ]
    };



    return (
        <div className='slider'>

            <div className='title-slider'>
                <h4> Ideales para:</h4>
            </div>   
             <Slider className='slider-carousel  d-flex flex-row-reverse' {...settings}>
                <div className='slider-div'>
                    <img src={img1} alt="" />
                </div>
                <div className='slider-div'>
                    <img src={img2} alt="" />
                </div>
                <div className='slider-div'>
                    <img src={img3} alt="" />
                </div>
                <div className='slider-div'>
                    <img src={img4} alt="" />
                </div>
                <div className='slider-div'>
                    <img src={img5} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Slider_products