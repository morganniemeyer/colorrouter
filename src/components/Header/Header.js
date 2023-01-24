import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/rgb/237/191/198">Baby Pink</NavLink>
      <NavLink to="/rgb/169/255/247">Celeste</NavLink>
      <NavLink to="/rgb/148/251/171">Mint Green</NavLink>
    </header>
  );
}
