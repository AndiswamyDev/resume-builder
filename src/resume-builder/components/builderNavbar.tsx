import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

class BuilderNavBar extends React.Component {
    render() {
        return (
            <Container className='m-1'>
                <Navbar.Brand className='text-dark'>RB</Navbar.Brand>
            </Container>
        )
    }
}

export default BuilderNavBar;