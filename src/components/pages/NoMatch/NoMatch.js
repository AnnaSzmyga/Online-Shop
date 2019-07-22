import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = (props) => {
    return (
        <div>
            <div>Strona nie została znaleziona.</div>
            <Link to="/">Powrót na stronę główną</Link>
        </div>
    )
}

export default NoMatch;