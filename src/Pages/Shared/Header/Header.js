import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../../images/logo.png'


const Header = () => {
    return (
        <>


            <Navbar className='mb-2 fixed-top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img height={30} src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;