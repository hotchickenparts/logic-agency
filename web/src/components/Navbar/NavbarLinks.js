import React from "react";
import CTALink from "../CTALink";
import styled from "styled-components";

const NavItem = styled(CTALink)`
  color: red;
  font-size: 2em;
`;

const NavbarLinks = ({ navMenuItems }) => {
  return (
    <>
      {navMenuItems.map(i => (
        <NavItem {...i} key={i._key} />
      ))}
    </>
  );
};

export default NavbarLinks;
