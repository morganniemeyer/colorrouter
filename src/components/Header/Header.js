import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/rgb/237/191/198" className="link pink">
        Baby Pink
      </NavLink>
      <NavLink to="/rgb/169/255/247" className="link foam">
        Celeste
      </NavLink>
      <NavLink to="/rgb/148/251/171" className="link green">
        Mint Green
      </NavLink>
    </header>
  );
}
