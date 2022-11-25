import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Header.module.css'
import Link from 'next/link' 

const Header=() =>{
  return (
    <>
    <div className={styles.item}>
    <Navbar  expand="lg" >
      <Container fluid>
        <Navbar.Brand href="/"><span style={{color:'white',fontSize:'25px'}}>Navbar scroll</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href='/about' style={{textDecoration:'none'}}>
                  <li className='active'><a style={{paddingLeft:'50px',fontSize:'20px',color:'white',cursor:'pointer',paddingTop:'30px'}} >About</a></li>
            </Link>
            <Link href='/contact' style={{textDecoration:'none'}}>
                  <li className='active'><a style={{paddingLeft:'20px',fontSize:'20px',color:'white',cursor:'pointer',paddingTop:'30px'}} >Contact</a></li>
            </Link>
            <Link href='/about' style={{textDecoration:'none'}}>
                  <li className='active'><a style={{paddingLeft:'20px',fontSize:'20px',color:'white',cursor:'pointer',paddingTop:'30px'}} >Page</a></li>
            </Link>
            <NavDropdown title="Page" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex flex-end">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
}

export default Header;