import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";

const AppointmentStyled = styled.section`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 30px;
`;

const FormContainer = styled.div``;
const ResultContainer = styled.div``;

const Appointment = () => {

  //Arreglo de citas
  const [appointments, setAppointments] = useState([]);
  
  //Funcion que tome las citas actuales y agregue las nuevas
  const addCita = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }

  return (
    <AppointmentStyled>
      <FormContainer>
        <Form addCita={addCita} />
      </FormContainer>
      <ResultContainer></ResultContainer>
    </AppointmentStyled>
  );
};

export default Appointment;
