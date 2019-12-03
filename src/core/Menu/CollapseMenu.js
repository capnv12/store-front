import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import {signout, isAuthenticated} from '../../auth/index'

const CollapseMenu = (props) => {
    const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

    if (props.navbarState === true) {
      return (
        <CollapseWrapper style={{
          transform: open.interpolate({
            range: [0, 0.2, 0.3, 1],
            output: [0, -20, 0, -200],
          }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
        >
          <NavLinks>
            {!isAuthenticated() && (
              <div>
                <li><Link  to="/logare">Logare</Link></li>
                <li><Link  to="/inregistrare">Inregistrare</Link></li>
              </div>
            )}
            {isAuthenticated() && (
              <Span onClick={() => signout(() => {
                props.history.push("/");
              })}>Dezautentificare</Span>
            )}
          </NavLinks>
        </CollapseWrapper>
      );
    }
    return null;
  };

  export default withRouter(CollapseMenu);

  const CollapseWrapper = styled(animated.div)`
    background: #fff;
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
  `;

  const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 2rem 2rem;

    & li {
      transition: all 300ms linear 2s;
    }

    & a {
      font-size: 1rem;
      line-height: 2;
      color: #333;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #fdcb6e;
        border-bottom: 1px solid #fdcb6e;
      }
    }
  `;
  const Span = styled.span`
    font-size: 1rem;
    line-height: 2;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  `

