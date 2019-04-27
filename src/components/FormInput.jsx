import React, { memo } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 16px;
  border: 1px grey solid;
  padding: 0.5em;
  border-radius: 25px;
`;

const Label = styled.label`
  font-size: 18px;
  margin: 0.5em;
`;

const Form = styled.div`
  margin-bottom: 1em;

  & * {
    display: block;
  }
`;

const FormInput = (props) => {
  const {
    label,
    id,
    onChange,
    value,
  } = props;

  const handleInput = e => onChange(e.targetValue)
  return (
    <Form>
      <Label htmlFor={id}>{label}</Label>
      <Input type="text" id={id} onChange={handleInput} />
    </Form>
  );
};

export default memo(FormInput);
