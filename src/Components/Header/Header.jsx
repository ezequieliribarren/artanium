import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="400">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/header/img1.png" className="d-block w-100 none-desktop" alt="Artanium" />
            {/* <img src="/images/header/img4.png" className="d-block w-100 none-mobile" alt="Artanium" /> */}
          </div>
          <div className="carousel-item">
            <img src="/images/header/img2.png" className="d-block w-100 none-desktop" alt="Artanium" />
            {/* <img src="/images/header/img3.png" className="d-block w-100 none-mobile" alt="Artanium" /> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header