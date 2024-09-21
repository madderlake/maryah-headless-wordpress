import React from 'react';
import { Container } from 'reactstrap';

import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center py-5">
        <span className="copyright text-small text-center">
          Mary A. Hayne All Rights reserved &copy;{new Date().getFullYear()}
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
