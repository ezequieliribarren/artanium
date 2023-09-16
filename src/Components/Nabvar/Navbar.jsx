
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from 'react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbars">
                <div className="container-fluid nav1">
                    <a className="navbar-brand px-5" href="#"><img className="logo-navbar" src="/images/logo.png" alt="" /></a>
                    <button
            className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className={`navbar-toggler-icon ${isMenuOpen ? "d-none" : ""}`}></span>
            <span id="close-icon" className={`close-icon ${isMenuOpen ? "" : "d-none"}`}>&#88;</span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" smooth to="/#nosotros">
                                    Nosotros
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Donde Comprar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Comunidad</a>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/ser-distribuidor">
                                    Ser distribuidor
                                </Link>
                            </li>
                            <li className="nav-item li-contact">
                                <Link className="nav-link" smooth to="/#contacto">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-light nav2 ">
                    <div className="container-fluid ">
                        <a className="navbar-brand px-5 nuestros-insumos" href="#">Nuestros insumos :</a>
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Papeles
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="nav-link" smooth to="/sublimacion/#papeles-sublimacion">
                                            Sublimación
                                        </Link>
                                    </li>
                                    <li><Link className="nav-link" smooth to="/sublimacion/#papeles-transfer">
                                        Transfer
                                    </Link></li>
                                    <li><Link className="nav-link" smooth to="/fotografico/#fotografico-mate">
                                        Fotográfico Mate
                                    </Link></li>
                                    <li><Link className="nav-link" smooth to="/fotografico/#fotografico-glossy">
                                        Fotográfico Glossy
                                    </Link></li>
                                    <li><Link className="nav-link" smooth to="/fotografico/#fotografico-resinado">
                                        Fotográfico Resinado
                                    </Link></li>
                                    <li><Link className="nav-link" smooth to="/fotografico/#fotografico-autoadhesivo">
                                        Fotográfico Autoadhesivo
                                    </Link></li>
                                    <li><Link className="nav-link" smooth to="/fotografico/#fotografico-magnetico">
                                        Fotográfico Magnético
                                    </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tintas
                                </a>
                                <ul className="dropdown-menu">
                                    <li> <Link className="nav-link" smooth to="/sublimacion/#tintas-sublimacion">
                                        Sublimación
                                    </Link></li>
                                    <li> <Link className="nav-link" smooth to="/dtf">
                                        DTF
                                    </Link></li>
                                    <li><a className="dropdown-item" href="#">Ink Jet</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Otros
                                </a>
                                <ul className="dropdown-menu">

                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </nav>

        </>
    )
}

export default Navbar