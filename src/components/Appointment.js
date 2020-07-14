import React from "react";

import PropTypes from 'prop-types';

const Appointment = ({ appointment, deteleAppointment }) => {
  const { pet, owner, quote, hour, symptoms, id } = appointment;
  return (
    <div>
      <p>
        Mascota: <span>{pet}</span>{" "}
      </p>
      <p>
        Dueño: <span>{owner}</span>{" "}
      </p>
      <p>
        Fecha: <span>{quote}</span>{" "}
      </p>
      <p>
        Hora: <span>{hour}</span>{" "}
      </p>
      <p>
        Sintomas: <span>{symptoms}</span>{" "}
      </p>

      <button onClick={() => deteleAppointment(id)}>Eliminar</button>
    </div>
  );
};

Appointment.protoType = {
  appointment: PropTypes.object.isRequired,
  deteleAppointment: PropTypes.func.isRequired
}

export default Appointment;
