import React from "react";
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
  return (
    <AppointmentStyled>
      <FormContainer>
        <Form />
      </FormContainer>
      <ResultContainer></ResultContainer>
    </AppointmentStyled>
  );
};

export default Appointment;
