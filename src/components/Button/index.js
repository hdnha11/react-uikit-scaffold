import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid purple;
  border-radius: 4px;
`;

/** Button component */
const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  /** Children node */
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
