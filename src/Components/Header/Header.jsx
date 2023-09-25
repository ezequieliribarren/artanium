import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="400">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/header/img1.png" className="w-100 hero-desktop" alt="Artanium" />
            <img src="/images/header/tablet1.png" className="hero-tablet w-100 " alt="Artanium" />
            <img src="/images/header/mobile1.png" className="hero-mobile w-100 " alt="Artanium" />
          </div>
          <div className="carousel-item">
            <img src="/images/header/img2.png" className="w-100 hero-desktop" alt="Artanium" />
            <img src="/images/header/tablet2.png" className="hero-tablet w-100 " alt="Artanium" />
            <img src="/images/header/mobile2.png" className="hero-mobile w-100 " alt="Artanium" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header