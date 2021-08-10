import React from 'react';

import StyledButton from './styles/styledButton';

const Button = ({ type = 'button', children, onClick }) => (
  <button type={type} className="button" onClick={onClick}>
    {children}
    test
  </button>
);

export default Button;
