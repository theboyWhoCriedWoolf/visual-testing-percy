'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));

function getThemeValue(name, props, values) {
  var value = (
    props.theme &&
    props.theme[name]
  );
  var themeValue;
  if (typeof value === 'function') {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }
  if (typeof themeValue === 'function') {
    return themeValue(props);
  } else {
    return themeValue;
  }
}
function theme(name, values) {
  return function(props) {
    return getThemeValue(name, props, values);
  };
}
theme.variants = function(name, prop, values) {
  return function(props) {
    var variant = props[prop] && values[props[prop]];
    return variant && getThemeValue(name, props, variant);
  };
};
var styledTheming = theme;

const backgroundColor = styledTheming.variants('mode', 'variant', {
  default: {
    light: '#2196f3'
  },
  primary: {
    light: '#1769aa'
  },
  success: {
    light: '#6fbf73'
  },
  warning: {
    light: '#f44336'
  }
});
const colorTheme = styledTheming.variants('mode', 'variant', {
  default: {
    light: 'white'
  },
  primary: {
    light: 'white'
  },
  success: {
    light: 'white'
  },
  warning: {
    light: 'white'
  }
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
  variant: 'default'
};
Button.displayName = 'Button';

exports.Button = Button;
