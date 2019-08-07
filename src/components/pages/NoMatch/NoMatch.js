import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'reactstrap';

import './NoMatch.css';

const NoMatch = (props) => {
    return (
        <Fade className="no-match" timeout={100}>
            <div className="no-match__error">404</div>
            <div className="no-match__info">Strona nie została znaleziona.</div>
            <Link className="no-match__link" to="/">
                <div className="go-back" >
                    <i className="fas fa-arrow-left go-back__icon"></i>
                    Powrót na stronę główną
                </div>
            </Link>
        </Fade>
    )
}

export default NoMatch;