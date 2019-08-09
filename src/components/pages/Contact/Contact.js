import React from 'react';
import { Fade } from 'reactstrap';
import Ornament from '../../common/Ornament/Ornament';

import './Contact.scss';


const Contact = (props) => {
    return (
        <Fade timeout={100} className="contact">
            <h2 className="page-heading">Kontakt</h2>
            <Ornament />
            <h4 className="contact__item">Adres:</h4>
            <p>ul.Słonimska 178/3 lok.6, 615-957 Białystok</p>
            <h4 className="contact__item">Telefon:</h4>
            <p>85 46 78 567</p>
            <h4 className="contact__item">E-mail:</h4>
            <p>wondercake@gmail.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ante sit amet velit blandit, eu laoreet orci maximus. Proin at sollicitudin dui, nec pulvinar tortor. Nulla id aliquam justo, vel pharetra orci. Nam id sodales dolor. Morbi mollis lacinia nulla nec tincidunt. Pellentesque tempus tristique purus, sed commodo tortor cursus ut. Nunc ullamcorper rhoncus tellus vitae fringilla. Maecenas turpis odio, rhoncus quis euismod non, sodales non nisi. Pellentesque vel nulla non tortor fermentum interdum quis ac ligula. Integer ipsum ante, elementum vitae convallis ut.</p>

        </Fade>
    )
}

export default Contact;