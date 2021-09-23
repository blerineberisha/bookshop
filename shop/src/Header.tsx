import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="nav-bar">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/all">All Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">A surprise</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
