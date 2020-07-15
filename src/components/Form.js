import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import PropTypes from "prop-types";

/*LAYOUTS*/
import Title from "../layouts/Title";

const FormStyled = styled.form`
  display: grid;
  grid-template: 1fr / repeat(2, 1fr);
  grid-gap: 20px;
  grid-template-areas: "pet pet" "owner owner" "quote hour" "symtoms symtoms" "button button";
`;
const FormControl = styled.div`
  :nth-child(1) {
    grid-area: pet;
  }
  :nth-child(2) {
    grid-area: owner;
  }
  :nth-child(3) {
    grid-area: quote;
  }
  :nth-child(4) {
    grid-area: hour;
  }
  :nth-child(5) {
    grid-area: symtoms;
  }
  :nth-child(6) {
    grid-area: button;
  }
`;
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  padding-left: 37px;
  font-weight: bold;
  color: var(--green);
`;
const Input = styled.input`
  height: 60px;
  width: 100%;
  outline: none;
  padding: 0 35px;
  border: 2px solid transparent;
  border-radius: 30px;
  box-shadow: none;
  background: var(--greenLight);
  transition: all 0.3s ease-in-out;
  ::placeholder {
    font-weight: bold;
    color: var(--grey);
  }
  :focus {
    border: 2px solid var(--green);
  }
  :focus::placeholder {
    color: var(--black);
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 30px;
  border: 2px solid transparent;
  resize: none;
  min-height: 150px;
  border-radius: 30px;
  background: var(--greenLight);
  transition: all 0.3s ease-in-out;
  ::placeholder {
    font-weight: bold;
    color: var(--grey);
  }
  :focus {
    border: 2px solid var(--green);
  }
  :focus::placeholder {
    color: var(--black);
  }
`;
const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: var(--green);
  color: var(--white);
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 0.75;
  }
`;

const Form = ({ addAppointment }) => {
  //Creamos el estado de la cita
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    quote: "",
    hour: "",
    symptoms: ""
  });

  const [error, setError] = useState(false);

  //Function que se ejecuta cuando el usuario escribe en un input
  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  //Extraemos los valores
  const { pet, owner, quote, hour, symptoms } = appointment;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar

    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      quote.trim() === "" ||
      hour.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }

    //Elominar mensaje de error
    setError(false);

    // Asignar un ID
    appointment.id = uuid();
    
    // Asiganamos la imagen
    let number = Math.floor(Math.random() * 9) + 1
    appointment.image = `http://lorempixel.com/200/200/animals/${number}/`

    // Crear la cita
    addAppointment(appointment);

    //Reiniciar el Form
    setAppointment({
      pet: "",
      owner: "",
      quote: "",
      hour: "",
      symptoms: "",
      image: ""
    });
  };
  return (
    <Fragment>
      <Title>Crear Citas</Title>

      {error ? <p>Todos los campos son obligatorio</p> : null}

      <FormStyled onSubmit={handleSubmit}>
        <FormControl>
          <Input
            onChange={handleChange}
            type="text"
            name="pet"
            placeholder="Coloque el nombre"
            value={pet}
          />
        </FormControl>
        <FormControl>
          <Input
            onChange={handleChange}
            type="text"
            name="owner"
            placeholder="Coloque el nombre"
            value={owner}
          />
        </FormControl>
        <FormControl>
          <Label>Fecha</Label>
          <Input
            onChange={handleChange}
            type="date"
            name="quote"
            value={quote}
          />
        </FormControl>
        <FormControl>
          <Label>Hora</Label>
          <Input onChange={handleChange} type="time" name="hour" value={hour} />
        </FormControl>
        <FormControl>
          <TextArea
            onChange={handleChange}
            name="symptoms"
            placeholder="Sintomas que presenta"
            value={symptoms}
          ></TextArea>
        </FormControl>
        <FormControl>
          <Button type="submit">Crear Cita</Button>
        </FormControl>
      </FormStyled>
    </Fragment>
  );
};

Form.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default Form;
