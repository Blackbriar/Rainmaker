import styled from '@emotion/styled';
import { color, space, fontSize, buttonStyle } from 'styled-system';

const Button = styled.button(
  {
    appearance: 'button',
    border: 0,
  },
  color,
  space,
  fontSize,
  buttonStyle,
);

Button.defaultProps = {
  variant: 'primary',
  px: 4,
  py: 3,
  fontSize: 3,
};

Button.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...buttonStyle.propTypes,
};

export default Button;
