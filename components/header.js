import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/header.module.css';
import { Container } from 'react-bootstrap';

const Header = ({ headerColor }) => {
  const headerStyle = {
    background: headerColor,
  };

  return (
    <Navbar className={styles.header} variant="dark" expand="lg" style={headerStyle}>
          <h1>Quiz dos Deputados</h1>
    </Navbar>
  );
};

export default Header;
