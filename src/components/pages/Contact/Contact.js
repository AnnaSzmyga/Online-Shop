import React from 'react';

import './Contact.css';

const Contact = (props) => {
    return (
        <div className="contact">
            <h2 className="page-heading">Kontakt</h2>
            <h4 className="contact__item">Adres:</h4>
            <p><span>ul.Słonimska 178/3 lok.6</span><span>15-957 Białystok</span></p>
            <h4 className="contact__item">Telefon:</h4>
            <p>85 46 78 567</p>
            <h4 className="contact__item">E-mail:</h4>
            <p>wondercakes@gmail.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ante sit amet velit blandit, eu laoreet orci maximus. Proin at sollicitudin dui, nec pulvinar tortor. Nulla id aliquam justo, vel pharetra orci. Nam id sodales dolor. Morbi mollis lacinia nulla nec tincidunt. Pellentesque tempus tristique purus, sed commodo tortor cursus ut. Nunc ullamcorper rhoncus tellus vitae fringilla. Maecenas turpis odio, rhoncus quis euismod non, sodales non nisi. Pellentesque vel nulla non tortor fermentum interdum quis ac ligula. Integer ipsum ante, elementum vitae convallis ut.</p>

        </div>
    )
}

export default Contact;