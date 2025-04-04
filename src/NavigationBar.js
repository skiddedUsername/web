import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" className="font">
            <Container>
                <Navbar.Brand as={Link} to="/"><b style={{ fontSize: "1.3rem" }}>Save Vault</b></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavItem href="/setup">
                            <Nav.Link as={Link} to="/setup" >Login</Nav.Link>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem href="https://github.com/DisboxApp/web">
                            <Nav.Link href="https://github.com/DisboxApp/web" target="_blank" rel="noopener noreferrer">Source code</Nav.Link>
                        </NavItem>
                        <NavItem href="https://github.com/DisboxApp/web/issues">
                            <Nav.Link href="https://github.com/DisboxApp/web/issues" target="_blank" rel="noopener noreferrer">Report problems</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;
