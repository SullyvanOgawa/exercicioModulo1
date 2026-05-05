import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

export default function Cabecalho() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" shadow="sm">
        
        <Container>
            
            <Navbar.Brand href="#home" className="fw-bold">
                REACT
            </Navbar.Brand>

            
            <Navbar.Toggle aria-controls="main-navbar" />

            <Navbar.Collapse id="main-navbar">
            
            <Nav className="me-auto">
                <Nav.Link href="#home">Início</Nav.Link>
                <Nav.Link href="#features">Recursos</Nav.Link>
                <Nav.Link href="#pricing">Preços</Nav.Link>

                
                <NavDropdown title="Mais" id="nav-dropdown">
                <NavDropdown.Item href="#about">Sobre</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contato</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#help">Ajuda</NavDropdown.Item>
                </NavDropdown>
            </Nav>

            
            <Nav className="ms-auto align-items-center gap-2">
                <Nav.Link href="#login">Entrar</Nav.Link>
                <Button variant="primary">Cadastrar</Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}