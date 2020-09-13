
import React from 'react';
import Logo from './logo/Logo';

import './Menu.css'

const Menu = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm menu">
            <div className="container-fluid px-0 mx-0 mx-md-3">
                <Logo />
                <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">                        
                        <li className="nav-item">
                            <a href="#" className="nav-link text-light">Paso a paso</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-light">Aprendizaje</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-light">Precios</a>
                        </li>
                        <button type="button" className='btn btn-secondary text-light'>Ingresar</button>
                        <button type="button" className='btn btn-light text-dark ml-2'>Registrarse</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;
