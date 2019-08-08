import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../features/Logo/Logo';
import Menu from '../../features/Menu/Menu';
import CartLink from '../../features/CartLink/CartLink';
import { Container } from 'reactstrap';

import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padding: '35px 0'
        }
    }
    // shrink navbar on scrolling
    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY < 200) {
                this.setState({ padding: '35px 0' });
            } else {
                this.setState({ padding: '15px 0' });
            }
        });
    }
    render() {
        return (
            <div className="navbar" style={{padding: this.state.padding}}>
                <Container>
                    <Link to="/" className="navbar__logo-link">
                        <Logo />
                    </Link>
                    <Menu />
                    <CartLink cartContent={this.props.cartContent} />
                </Container>
            </div>
        )
    }
}


// const Navbar = ({cartContent, ...props}) => {
//     return (
//         <div className="navbar">
//             <Container>
//                 <Link to="/" className="navbar__logo-link">
//                     <Logo />
//                 </Link>
//                 <Menu />
//                 <CartLink cartContent={cartContent} />
//             </Container>
//         </div>
//     )
// }

export default Navbar;