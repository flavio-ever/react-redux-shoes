import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logotipo } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logotipo>Redux Shoes</Logotipo>
      </Link>

      <Cart>

      </Cart>
    </Container>
  );
}
