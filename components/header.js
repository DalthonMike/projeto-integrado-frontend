import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/header.module.css';

const Header = ({ headerColor }) => {
  const headerStyle = {
    background: headerColor
  };

  return (
    <Navbar className={styles.header} variant="dark" expand="lg" style={headerStyle}>
      <Navbar.Brand href="/">Casa Brasil</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Início</Nav.Link>
          <Nav.Link href="/sobre">Sobre</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/contato">Contato</Nav.Link>
        </Nav>
        <div className={styles.flagContainer}>
          <img
            className={styles.flag}
            src="/images/brazil-flag.png"
            alt="Bandeira do Brasil"
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
