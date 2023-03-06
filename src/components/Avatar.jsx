import React from 'react';
import New from './New';

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <New isNew={isNew} />
      <img className="photo" src={image} alt="avatar" />
    </div>
  );
}
