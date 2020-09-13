import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <>
            <header className="header px-0 container-fluid row mx-0 d-flex flex-lg-row px-lg-0">
                <div className="col-12 col-lg-6 mt-5 header__col">
                    <div className="col-12 px-0 mt-5 d-flex flex-column justify-content-center header__col">
                        <h1 className="h1 text-white text-center text-lg-left header__title">Convierte tu pasión <br />en tu mejor inversión</h1>
                        <h2 className="h6 mt-4 text-white text-center text-lg-left header__subtitle">
                            Nosotros encontramos las surebets y te entregamos la información.<br />
                        Tú apuestas y ganas sin importar el resultado.
                        </h2>
                    </div>
                    <div className="col-12 mt-5 mt-lg-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center header__col">
                        <a className="btn btn-primary mx-3 ml-lg-0 mr-lg-4 py-3 my-1 px-sm-4 mx-sm-5 header__btn header__btn--wl header__btn--green header__btn--fsl">PRUÉBALO GRATIS</a>
                        <a className="btn btn-secondary py-3 my-1 px-sm-4 header__btn header__btn--wl header__btn--orange header__btn--fsl">¿CÓMO FUNCIONA?</a>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-none d-lg-inline overflow-hidden header__col">
                    <img src="/assets/header/header-image.png" className="position-absolute header__img"></img>
                </div>

            </header>

        </>
    )
}

export default Header;