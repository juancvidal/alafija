import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <>
            <header className="header container-fluid d-flex flex-column">
                <div className="row mt-5 header__row">
                    <div className="col-12 mt-5 d-flex flex-column justify-content-center header__col">
                        <h1 className="h1 text-white text-center header__title">Convierte tu pasión <br />en tu mejor inversión</h1>
                        <h2 className="h6 mt-4 text-white text-center header__subtitle">
                            Nosotros encontramos las surebets y te entregamos la información.<br />
                        Tú apuestas y ganas sin importar el resultado.
                        </h2>
                    </div>
                    <div className="col-12 mt-5 d-flex flex-column justify-content-center align-items-center header__col">
                        <a className="btn btn-primary mx-3 py-3 header__btn header__btn--wl header__btn--green header__btn--fsl">PRUÉBALO GRATIS</a>
                        <a className="btn btn-secondary py-3 header__btn mt-2 header__btn--wl header__btn--orange header__btn--fsl">¿CÓMO FUNCIONA?</a>
                    </div>
                </div>
                <div className="row d-none">

                </div>

            </header>

        </>
    )
}

export default Header;