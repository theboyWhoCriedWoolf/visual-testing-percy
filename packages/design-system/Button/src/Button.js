import styled from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: '#2196f3' },
  primary: { light: '#1769aa' },
  success: { light: '#6fbf73' },
  warning: { light: '#f44336' },
});

const colorTheme = theme.variants('mode', 'variant', {
  default: { light: 'white' },
  primary: { light: 'white' },
  success: { light: 'white' },
  warning: { light: 'white' },
});

const Button = styled.button`
  padding: 20px;
  appearance: none;
  box-shadow: none;
  text-decoration: none;
  display: inline-flex;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;

  background-color: ${backgroundColor};
  color: ${colorTheme};
`;

Button.defaultProps = {
  variant: 'default',
};

Button.displayName = 'Button';

export default Button;
