import React from 'react'
import styled from 'styled-components'

const BurgerMenu = (props) => {
    return(
        <Wrapper onClick={props.handleNavbar}>
            <div className={ props.navbarState ? "open" : "" }>
                 <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
        </Wrapper>
    )
}

export default BurgerMenu

const Wrapper = styled.div`
  position: relative;
  padding: 4px 0 0;
  cursor: pointer;
  display: block;

  & span {
    background: #707473;
    display: block;
    position: relative;
    width: 2rem;
    height: .4rem;
    margin-bottom: 5px;
    transition: all ease-in-out 0.2s;
    border-radius:25px;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 12px;
  }

`;