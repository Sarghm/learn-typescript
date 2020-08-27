import React from 'react';
import styled from 'styled-components';

export interface TextInputProps {
  placeholder?: string;
}

const StyledInput = styled.input`
  padding-top: ${(props) => props.theme.space.ten}px;
  padding-left: ${(props) => props.theme.space.fifteen}px;
  border-radius: 8px;
  outline: 0px;
`;

const TextInput = ({ placeholder }: TextInputProps) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

export { TextInput };
