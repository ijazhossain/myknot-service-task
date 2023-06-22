import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/templatemo-eduwell.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header-container' >
            <Navbar className='h-100' bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto w-75 justify-content-evenly">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#services">Services</Nav.Link>
                            <Nav.Link className='text-white' href="#courses">Courses</Nav.Link>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Our services
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>
                            <Nav.Link className='text-white' href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link className='text-white' href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;