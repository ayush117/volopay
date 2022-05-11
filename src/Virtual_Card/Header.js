import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Header = () => {
  return (
    <Navbar className="header">
      <Navbar.Brand className="hname">Virtual Cards</Navbar.Brand>
      <Nav.Link className="subname" href="#features">
        <Badge className="badge badge-lm bg-light" text="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-camera-video"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
            />
          </svg>
          Learn more
        </Badge>
      </Nav.Link>

      <Nav className="justify-content-end flex-grow-1 pe-3">
        <Button className="btn btn-headerButton shadow bg-white rounded">+ Virtual Cards</Button>
      </Nav>
    </Navbar>
  );
};
export default Header;
