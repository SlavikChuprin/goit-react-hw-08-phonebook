import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Logi in
    </NavLink>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;