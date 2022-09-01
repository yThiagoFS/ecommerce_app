import { Button, Container, Nav, Navbar as NavBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { CartIcon } from "./CartIcon"
export const Navbar = () => {

    return (
        <NavBS sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home    
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store    
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About    
                    </Nav.Link>
                </Nav>
                <Button 
                style={{width: '3rem', height: '3rem', position:'relative'}}
                variant='outline-primary' 
                className="rounded-circle">
                    {CartIcon}
                    <div 
                    style={{color:'white', width:'1.5rem', height: '1.5rem', position:'absolute', bottom: '0',right: '0', transform:'translate(25%, 25%)'}}
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center" >3</div>
                </Button>
            </Container>
        </NavBS>
    )
}