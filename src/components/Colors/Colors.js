import React from 'react';
import { useParams } from 'react-router-dom';
import './Colors.css';

export default function Colors() {
  let { r, g, b } = useParams();
  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <main>
        <h1>
          RGB ({r}, {g}, {b})
        </h1>
      </main>
    </div>
  );
}
