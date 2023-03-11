import './AppXY.css';

import React, { useState } from 'react';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onPointerMove = (e) => {
    setPosition((prev) => ({ ...prev, x: e.pageX }));
  };

  return (
    <div className="container" onPointerMove={(e) => onPointerMove(e)}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
