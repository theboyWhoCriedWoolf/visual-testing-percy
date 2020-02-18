import React, { Children, isValidElement } from 'react';
import styled from 'styled-components';

const SpecContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-weight: bold;
  box-sizing: border-box;
  background-color: #4834d4;
  padding: 5px;
  color: white;
`;

const PropLabel = styled.span`
  font-weight: bold;
  padding: 0 4px;
  min-width: 140px;
  display: inline-block;
  box-sizing: border-box;
`;

const PropValue = styled.span`
  padding: 0 4px;
  box-sizing: border-box;
`;

const PropList = styled.div`
  background-color: #686de0;
  padding: 5px;
  box-sizing: border-box;
  font-size: 8pt;
  color: white;
`;

const Box = styled.div`
  background-color: ${props => (props.inverted ? '#111' : '#eee')};
  padding: 10px;
`;

const Pill = ({ label, value: propValue }) => {
  const value = () => {
    if (isValidElement(propValue)) return 'React Element';
    if (Array.isArray(propValue) && propValue.every(element => isValidElement(element)))
      return '[React Element]';

    try {
      return JSON.stringify(propValue);
    } catch (e) {
      return '-';
    }
  };

  return (
    <>
      <PropLabel>{label}</PropLabel>
      <PropValue>{value()}</PropValue>
    </>
  );
};

const Props = ({ children }) => {
  const node = Children.only(children);
  const propEntries = Object.entries(node.props);

  return (
    <PropList>
      {propEntries
        .filter(([, value]) => typeof value !== 'function')
        .map(([key, value]) => (
          <Pill key={key} label={key} value={value} />
        ))}
    </PropList>
  );
};

const Spec = ({ inverted, label, omitPropsList = false, children }) => (
  <SpecContainer>
    <Label>{label}</Label>
    {!omitPropsList && <Props>{children}</Props>}
    <Box inverted={inverted}>{children}</Box>
  </SpecContainer>
);

export default Spec;
