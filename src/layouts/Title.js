import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h2`
  font-family: "Merriweather", serif;
  color: var(--green);
  margin-bottom: 35px;
  text-align: center;
`;

const Title = ({ children }) => <TitleStyled>{children}</TitleStyled>;

export default Title;
