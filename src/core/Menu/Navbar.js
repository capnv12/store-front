import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import {signout, isAuthenticated} from '../../auth/index'

import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";


const Navbar = ({ navbarState, handleNavbar, history }) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 300,
    config: config.wobbly,
  });



  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
        <Link  to="/"><Logo /></Link>
          <NavLinks style={linkAnimation}>
            {!isAuthenticated() && (
              <div>
                <Link  to="/logare">Logare</Link>
                <Link  to="/inregistrare">Inregistrare</Link>
              </div>
            )}
            {isAuthenticated() && (
              <div>
                <Link  to="/cont">Cont</Link>
                <Span onClick={() => signout(() => {history.push("/");})}>Dezautentificare</Span>
              </div>
                )}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState}
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
   </>
  )
}

export default withRouter(Navbar)

const NavBar = styled(animated.nav)`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  font-size: 1.2rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: 0 auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #333;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem;
    transition: all linear 0.2s;
    text-decoration: none;
    cursor: pointer;
    padding:21px 0 0;



    &:hover {
        color: #333;
        border-bottom: 2px solid #207abd;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const Span = styled.span`
color: #333;
font-weight: 600;
border-bottom: 2px solid transparent;
margin: 0 1.5rem;
transition: all linear 0.2s;
text-decoration: none;
cursor: pointer;
padding:21px 0 0;
&:hover {
  color: #333;
  border-bottom: 2px solid #207abd;
}

@media (max-width: 768px) {
display: none;
}
`
const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`