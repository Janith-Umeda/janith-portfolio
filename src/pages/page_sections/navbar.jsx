import { Container, Nav, Navbar,Offcanvas } from "react-bootstrap";

const Mypic = "images/wa_dp.jpg";
const navItems = ['ABOUT','PROJECTS','TESTIMONIALS','CONTACT'];

const NavigationBar = ()=>{
    return(
        <Navbar bg="transparent" variant="dark" expand="md" sticky="top" style={{backdropFilter:'blur(60px)'}}>
            <Container fluid>
              <Navbar.Brand href="#" title="Janith Umeda Madushan">
                <img src={Mypic} width="35" height="35" className="d-inline-block align-top rounded-circle" alt="logo"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
                className="bg-dark"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    Navigation.
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {navItems.map((e)=>{
                      return (
                        <Nav.Link 
                          key={e} 
                          title={e.toLowerCase()} 
                          href={`#${e.toLowerCase()}`}
                          style={{color:'#cfcfcf'}}>
                            {e}
                        </Nav.Link>
                      )
                    })}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;

