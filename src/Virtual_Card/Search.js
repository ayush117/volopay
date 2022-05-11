import React, { useEffect, useRef, useState } from "react";
import Cards from "../Cards/Ex";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'


const Search = () => {
  const [type, setType] = useState(0);
  const [send, setSend] = useState(0);
  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);
  const modalRef = useRef(undefined);

  const handleClick = () => {
    setIsOpen(true);
  };

  const onTypeChange = (t) => {
    console.log(t);
    setType((prev) => {
      if(prev === 0){
        return t;
      } else {
        return 0
      }
    });
  };

  const clear = () => {
    setType(0);
    apply();
  }

  const apply = () => {
    setSend(type);
  }

  return (
    <>
      <Nav className="justify-content-end ">
        <Nav.Item className="searchIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Nav.Item>
        <Nav.Item className="filter">
          <Nav.Link eventKey="1" href="#/home">
            <Dropdown>
              <Dropdown.Toggle className="filter-btn shadow bg-white rounded">Filter</Dropdown.Toggle>
              <Dropdown.Menu className="filter_com" style={{ minWidth: 370 }}>
                <Card>
                  <Card.Header>Filter</Card.Header>
                  <Card.Body>
                    <h5 className="type">Type</h5>
                    <div className="lower_data d-flex  justify-content-between">
                    <label>
                        <input
                          className="radio-btn"
                          type="checkbox"
                          value="burner"
                          checked={type === 1}
                          onChange={() => onTypeChange(1)}
                        />
                        burner
                      </label>
                      <label>
                        <input
                          className="radio-btn"
                          type="checkbox"
                          value="Subcription"
                          checked={type === 2}
                          onChange={() => onTypeChange(2)}
                        />
                        Subcription
                      </label>
                    </div>

                    <h5 className="text2">Cardholder</h5>
                    <Dropdown>
                      <Dropdown.Toggle className="cardHolder" variant="success" id="dropdown-basic">
                        Select Cardholder
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another action</Dropdown.Item>
                        <Dropdown.Item >Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <div className="lower_data submit d-flex  justify-content-between">
                      <Button className="sub-btn apply" onClick={apply}>Apply</Button>
                      <Button className="sub-btn clear" onClick={clear}>Clear</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav.Item>

      </Nav>
      <section className="iteam_section mt-4 container">
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          <Cards type={send} />
        </div>
        

      </section>
    </>
  );
};

export default Search;
