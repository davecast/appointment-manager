import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AppointmentStyled = styled.article`
  background: var(--greyLight);
  display: grid;
  grid-template: 1fr / 50px 1fr 50px;
  padding: 10px 20px;
  grid-gap: 15px;
  border-radius: 300px;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Info = styled.div``;

const PetName = styled.h3`
  text-transform: capitalize;
  color: var(--green);
  font-size: 16px;
  font-weight: bold;
`;
const OwnerName = styled.p`
  color: var(--grey);
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Symptoms = styled.p`
  color: var(--black);
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 5px;
`;
const DateTimeInfo = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    margin-right: 10px;
  }
`;
const MetaInfo = styled.p`
  font-size: 12px;
  line-height: 12px;
`;
const MetaTitle = styled.strong`
  font-size: 12px;
  line-height: 12px;
  margin-right: 5px;
`;

const DelentInfo = styled.button`
  width: 40px;
  height: 20px;
  background: #fd356d;
  border: none;
  border-radius: 10px;
  color: var(--white);
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: translateY(-3px);
    opacity: 0.85;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.1), 0px 3px 6px rgba(0,0,0,0.1);
  } 
  :active {
    transform: translateY(0px);
    opacity: 0.95;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.1);
  }
`;

const Appointment = ({ appointment, deteleAppointment }) => {
  const { pet, owner, quote, hour, symptoms, id, image } = appointment;
  return (
    <AppointmentStyled>
      <Image src={image} alt={pet} />
      <Info>
        <PetName>{pet}</PetName>
        <OwnerName>Dueño: {owner}</OwnerName>
        <Symptoms>
          <MetaTitle>Sintomas:</MetaTitle>: {symptoms}
        </Symptoms>
        <DateTimeInfo>
          <li>
            <MetaInfo>
              <MetaTitle>Fecha entrada:</MetaTitle>
              {quote}
            </MetaInfo>
          </li>
          <li>
            <MetaInfo>
              <MetaTitle>Hora entrada:</MetaTitle>
              {hour}
            </MetaInfo>
          </li>
        </DateTimeInfo>
      </Info>
      <DelentInfo onClick={() => deteleAppointment(id)}>X</DelentInfo>
    </AppointmentStyled>
  );
};

Appointment.protoType = {
  appointment: PropTypes.object.isRequired,
  deteleAppointment: PropTypes.func.isRequired,
};

export default Appointment;
