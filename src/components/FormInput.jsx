import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  return (
    <Form>
      <Label htmlFor={id}>{label}</Label>
      <Input type="text" id={id} value={value} onChange={onChange} />
    </Form>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
