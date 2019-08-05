import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'reactstrap';

const NoMatch = (props) => {
    return (
        <Fade timeout={100}>
            <div>Strona nie została znaleziona.</div>
            <Link to="/">Powrót na stronę główną</Link>
        </Fade>
    )
}

export default NoMatch;