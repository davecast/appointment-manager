import React, { Fragment } from "react";

/*LAYOUT*/
import Wrapper from "./layouts/Wrapper";
import Appointment from "./components/Appointment";

function App() {
  return (
    <Fragment>
      <Wrapper>
        <h1>Administrador de Citas</h1>
        <Appointment />
      </Wrapper>
    </Fragment>
  );
}

export default App;
