import React from 'react';
import styled from 'styled-components';

export interface TextInputProps {
  placeholder?: string;
}

const StyledInput = styled.input`
  padding-top: ${(props) => props.theme.space.ten}px;
  padding-bottom: ${(props) => props.theme.space.ten}px;
  padding-left: ${(props) => props.theme.space.fifteen}px;
  padding-right: ${(props) => props.theme.space.fifteen}px;
  font-family: ${(props) => props.theme.textStyles.body.fontFamily};
  font-weight: ${(props) => props.theme.textStyles.body.fontWeight};
  font-size: ${(props) => props.theme.textStyles.body.fontSize};
  border-radius: 8px;
  border-color: ${(props) => props.theme.colors['black-twenty']};
  box-shadow: ${(props) => props.theme.shadows['black-ten']};
  border-width: 1px;
  outline: 0px;
  display: flex;
  flex-grow: 1;
`;

const TextInput = ({ placeholder }: TextInputProps) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

export { TextInput };
