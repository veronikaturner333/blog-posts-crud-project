import{Navbar, Nav, Container} from 'react-bootstrap';

//navbar component will feature links to the home page, posts page, and about me page
export function SiteNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Veronika's Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Posts">Posts</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default SiteNavbar;