import styled from '@emotion/styled';
import { borders, color, space, fontSize } from 'styled-system';

const Input = styled.input(
  borders,
  color,
  space,
  fontSize,
);

Input.defaultProps = {
  px: 2,
  py: 1,
  fontSize: 1,
  border: '1px solid',
  borderColor: 'blue',
  borderRadius: 1,
};

Input.propTypes = {
  ...borders.propTypes,
  ...color.propTypes,
  ...space.propTypes,
};

export default Input;
