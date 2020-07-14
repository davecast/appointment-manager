import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Form from "./Form";
import Appointment from "./Appointment";

const AppointmentStyled = styled.section`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 30px;
`;

const FormContainer = styled.div``;
const ResultContainer = styled.div``;

const Appointments = () => {
  //Citas en local storage
  let appointmentInitial = JSON.parse(localStorage.getItem("appointments"));

  if (!appointmentInitial) {
    appointmentInitial = [];
  }
  //Arreglo de citas
  const [appointments, setAppointments] = useState(appointmentInitial);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (appointmentInitial) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments, appointmentInitial]);

  //Funcion que tome las citas actuales y agregue las nuevas
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  //Funcion que eliminar cita segun si id
  const deteleAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );

    setAppointments(newAppointments);
  };

  //Mensaje considicional
  const title =
    appointments.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <AppointmentStyled>
      <FormContainer>
        <Form addAppointment={addAppointment} />
      </FormContainer>
      <ResultContainer>
        <h2>{title}</h2>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            deteleAppointment={deteleAppointment}
          />
        ))}
      </ResultContainer>
    </AppointmentStyled>
  );
};

export default Appointments;
