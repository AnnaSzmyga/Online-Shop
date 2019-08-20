import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../features/Logo/Logo';
import Hamburger from '../../features/Hamburger/Hamburger';
import Menu from '../../features/Menu/Menu';
import CartLink from '../../features/CartLink/CartLink';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import './Navbar.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padding: '35px 0',
            menuShow: false
        };
    }
    // shrink navbar on scrolling
    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY < 150) {
                this.setState({ padding: '35px 0' });
            } else {
                this.setState({ padding: '10px 0' });
            }
        });
    }

    toggleMenu = () => {
        this.setState({menuShow: !this.state.menuShow});
    }

    render() {
        return (
            <div className="navbar" style={{padding: this.state.padding}}>
                <Container>
                    <div className="navbar__mobile-view">
                        <Link to="/" className="navbar__logo-link" onClick={this.props.resetFiltering}>
                            <Logo />
                        </Link>
                        <Hamburger toggleMenu={this.toggleMenu} menuShow={this.state.menuShow} />
                    </div>
                    <Menu menuShow={this.state.menuShow} resetFiltering={this.props.resetFiltering} />
                    <CartLink cartContent={this.props.cartContent} menuShow={this.state.menuShow} />
                </Container>
            </div>
        )
    }
}

Navbar.propTypes = {
    cartContent: PropTypes.number
}

export default Navbar;