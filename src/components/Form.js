import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid'
import styled from "styled-components";



const FormStyled = styled.form``;
const FormControl = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  padding-left: 11px;
`;
const Input = styled.input`
  height: 50px;
  width: 100%;
  outline: none;
  padding: 0 10px;
  border: 1px solid var(--grey);
  border-radius: 4px;
  box-shadow: none;
`;
const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 15px 10px;
  border: 1px solid var(--grey);
  border-radius: 4px;
  box-shadow: none;
  resize: none;
  min-height: 120px;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: var(--blue);
  color: var(--white);
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #222;
  }
`;

const Form = ({ addCita }) => {
  //Creamos el estado de la cita
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    quote: "",
    hour: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  //Function que se ejecuta cuando el usuario escribe en un input
  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
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
    setError(false ); 

    // Asignar un ID
    appointment.id = uuid();

    // Crear la cita
    addCita(appointment); 

    //Reiniciar el Form
    setAppointment({
      pet: "",
      owner: "",
      quote: "",
      hour: "",
      symptoms: "",
    })
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      { error ? <p>Todos los campos son obligatorio</p> : null }

      <FormStyled onSubmit={handleSubmit}>
        <FormControl>
          <Label>Nombre Mascota</Label>
          <Input
            onChange={handleChange}
            type="text"
            name="pet"
            placeholder="Coloque el nombre"
            value={pet}
          />
        </FormControl>
        <FormControl>
          <Label>Nombre Dueño</Label>
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
          <Label>Sintomas</Label>
          <TextArea
            onChange={handleChange}
            name="symptoms"
            placeholder="Sintomas que presenta"
            value={symptoms}
          ></TextArea>
        </FormControl>

        <Button type="submit">Agregar Cita</Button>
      </FormStyled>
    </Fragment>
  );
};

export default Form;
