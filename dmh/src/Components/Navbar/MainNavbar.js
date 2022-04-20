import { React, Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './MainNavbar.css';

class MainNavbar extends Component {

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#">
                    <img
                        src="logo192.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Rules" id="collapsible-nav-dropdown" menuVariant="dark">
                        <NavDropdown.Item href="#">Quick References</NavDropdown.Item>
                        <NavDropdown.Item href="#">Base Rules</NavDropdown.Item>
                        <NavDropdown.Item href="#">Optional Rules</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-danger">Player Info</Button>
                    <NavDropdown title="DMScreen" id="collapsible-nav-dropdown" menuVariant="dark">
                        <NavDropdown.Item href="#">Shop Generator</NavDropdown.Item>
                        <NavDropdown.Item href="#">Item Generator</NavDropdown.Item>
                        <NavDropdown.Item href="#">Encounter Generator</NavDropdown.Item>
                        <NavDropdown.Item href="#">NPC Generator</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#">Shops</NavDropdown.Item>
                        <NavDropdown.Item href="#">Items</NavDropdown.Item>
                        <NavDropdown.Item href="#">Encounters</NavDropdown.Item>
                        <NavDropdown.Item href="#">NPCs</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="References" id="collapsible-nav-dropdown" menuVariant="dark">
                        <NavDropdown.Item href="#">Books</NavDropdown.Item>
                        <NavDropdown.Item href="#">Monsters</NavDropdown.Item>
                        <NavDropdown.Item href="#">Spells</NavDropdown.Item>
                        <NavDropdown.Item href="#">Items</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
}

export default MainNavbar;