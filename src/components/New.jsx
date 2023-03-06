import React from 'react';
import Badge from './Badge';

export default function New({ isNew }) {
  return isNew && <Badge content="NEW" />;
}
