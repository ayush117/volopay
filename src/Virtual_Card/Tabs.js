import Nav from "react-bootstrap/Nav";

const Tabs = () => {
  return (
    <Nav
      className="baseNav"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="active">
        <Nav.Link href="/yours">Yours</Nav.Link>
      </Nav.Item>
      <Nav.Item className="active">
        <Nav.Link>All</Nav.Link>
      </Nav.Item>
      <Nav.Item className="active">
        <Nav.Link>Blocked</Nav.Link>
      </Nav.Item>
      <Nav.Item className="justify-content-end last">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg=="/>
      <img className="gridImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAArElEQVRYhe3YwQ2CQBCF4beETijBC1SgVEIJWoKWYCVgBXqxBFsRTxgMQ4g+4szhfTdINvkzZLMbABFfCQC2x2vvHWK5HKqUDw/dvvRsmdidbgCAzLljUfjA3Hp5vj//3QEAaDbTeYWfoAJZCmSZu9jaTV7ilMwwJ9g+fjua6yKtsn4s/AQVyFIgS4EsBbIUyFIgS4Es8z5o3cu+wa4fCz/B8IHvTzz8TRKRTy+BthNbUMItnQAAAABJRU5ErkJggg=="/>
      </Nav.Item>
    </Nav>
  );
};
export default Tabs;
