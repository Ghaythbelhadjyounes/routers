import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import CityList from "./CityList";
function Search() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/City">Movies Time</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav.Link href="/">Home</Nav.Link>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown
                title="Gender"
                id="navbarScrollingDropdown"
                style={{ marginLeft: "50%" }}
              >
                <NavDropdown.Item href="/Afrique">Afrique</NavDropdown.Item>
                <NavDropdown.Item href="/Europe">Europe</NavDropdown.Item>
                <NavDropdown.Item href="/Asie">Asie</NavDropdown.Item>
                <NavDropdown.Item href="/Amerique">Amerique</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => setSearch(event.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CityList input={search} />
    </div>
  );
}

export default Search;
