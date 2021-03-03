import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const FormStyles = styled.form`
  display: flex;
  flex-flow: column wrap;
  max-width: 100%;
  > * {
    margin-bottom: var(--padding-large);
  }
`;

const Form = ({ formInputs = [], handleOnSubmit }) => {
  const [formData, setForm] = useState({});
  //   console.log("yo form data!",formData)
  const handleOnChange = (e) => {
    let formData = {};
    formData[e.target.name] = e.target.value;
    setForm((prevData) => {
      return {
        ...prevData,
        ...formData,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(formData);
  };
  return (
    <FormStyles onSubmit={handleSubmit}>
      {formInputs.map((input, key) => {
        return <Input key={key} {...input} handleOnChange={handleOnChange} />;
      })}
      <Button>Submit</Button>
    </FormStyles>
  );
};

export default Form;
