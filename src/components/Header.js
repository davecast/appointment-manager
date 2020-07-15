import React from "react";
import styled from "styled-components";

/*LAYOUT*/
import Wrapper from "../layouts/Wrapper";

const HeaderStyled = styled.header`
  background: var(--green);
`;
const HeaderContent = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-family: "Merriweather", serif;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContent>
          <HeaderTitle>Administrador de citas</HeaderTitle>
        </HeaderContent>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
