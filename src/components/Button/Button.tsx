import React from 'react';
import { Props } from './types';
import './styles.scss';

const Button: React.FC<Props> = () => {
  return (
    <button type="button" className="brc-button">Button</button>
  );
};

export default Button;
