import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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
    ref,
  } = props;

  return (
    <Form />
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FormInput;
