import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SliderProducts = ({ img1, img2, img3, img4, img5, ideales }) => {
    return (
        <div className="container-fluid">
            <div className='row slider p-4'>
                <div className="col-12 col-md-2">
                    <div className='title-slider'>
                        <h4> {ideales}</h4>
                    </div>
                </div>

                <div className="col-12 col-md-10">
                    <Carousel className='slider-fixed'
                        showArrows={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        centerMode={false}
                        showStatus={false}
                        showIndicators={false}
                    >
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '190px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img1} alt='' />
                                <img src={img2} alt='' />
                                <img src={img3} alt='' />
                                <img src={img4} alt='' />
                                <img src={img5} alt='' />
                            </div>
                        </div>
                    </Carousel>
                    <Carousel className='slider-desktop'
                        showArrows={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        centerMode={false}
                        showStatus={false}
                        showIndicators={false}
                    >
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img1} alt='' />
                                <img src={img2} alt='' />
                                <img src={img3} alt='' />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img5} alt='' />
                                <img src={img4} alt='' />
                            </div>
                        </div>
                    </Carousel>
                    <Carousel className='slider-2'
                        showArrows={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        centerMode={false}
                        showStatus={false}
                        showIndicators={false}
                    >
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img1} alt='' />
                                <img src={img2} alt='' />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img3} alt='' />
                                <img src={img4} alt='' />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img5} alt='' />
                            </div>
                        </div>
                    </Carousel>
                    <Carousel className='slider-mobile'
                        showArrows={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        centerMode={false}
                        showStatus={false}
                        showIndicators={false}
                    >
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img1} alt='' />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img2} alt='' />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img3} alt='' />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img4} alt='' />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='slider-div' style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={img5} alt='' />
                            </div>
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>

    );
};

export default SliderProducts;
