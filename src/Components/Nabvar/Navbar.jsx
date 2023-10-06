
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from 'react';
import { scroller } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScrollToSection = (id) => {
        setTimeout(() => {
            scrollToSection(id);
        }, 100);
        handleCloseClick();
    };

    const scrollToSection = (id) => {
        scroller.scrollTo(id, {
            duration: 400,
            offset: -130,
            smooth: true,
        });
    };

    return (
        <>
            <nav className="navbar navbar-expand-xl bg-light navbars">
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
                                <Link className="nav-link" to="/en-construccion">
                                    Donde Comprar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/en-construccion">
                                    Comunidad
                                </Link>
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
                        <a className="navbar-brand px-5 nuestros-insumos">Nuestros insumos :</a>
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Papeles
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="nav-link" to="/sublimacion" onClick={() => handleScrollToSection('papeles-sublimacion')}>

                                            Sublimación

                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/transfer" onClick={() => handleScrollToSection('papeles-transfer')}>

                                            Transfer

                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/fotografico" onClick={() => handleScrollToSection('fotografico-mate')}>

                                            Fotográfico Mate

                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/fotografico" onClick={() => handleScrollToSection('fotografico-glossy')}>

                                            Fotográfico Glossy

                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/fotografico" onClick={() => handleScrollToSection('fotografico-resinado')}>

                                            Fotográfico Resinado

                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/fotografico" onClick={() => handleScrollToSection('fotografico-autoadhesivo')}>

                                            Fotográfico Autoadhesivo

                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/fotografico" onClick={() => handleScrollToSection('fotografico-magnetico')}>

                                            Fotográfico Magnético

                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tintas
                                </a>
                                <ul className="dropdown-menu">
                                    <li>

                                        <Link className="nav-link" to="/sublimacion" onClick={() => handleScrollToSection('tintas-sublimacion')}>

                                            Sublimación

                                        </Link>
                                    </li>
                                    <li>

                                        <Link className="nav-link" to="/dtf" onClick={() => handleScrollToSection('tintas-dtf')}>

                                            DTF

                                        </Link>
                                    </li>
                                    <li>

                                        <Link className="nav-link" to="/fotografico" onClick={() => handleScrollToSection('tintas-fotografico')}>

                                            Ink Jet

                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Otros
                                </a>
                                <ul className="dropdown-menu">
                                    <li>

                                        <Link className="nav-link" to="/dtf" onClick={() => handleScrollToSection('film-dtf')}>

                                            Film DTF

                                        </Link>
                                    </li>
                                    <li>

                                        <Link className="nav-link" to="/dtf" onClick={() => handleScrollToSection('polvo-dtf')}>

                                            Polvo DTF

                                        </Link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav >
            </nav >

        </>
    )
}

export default Navbar