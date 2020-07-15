import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
