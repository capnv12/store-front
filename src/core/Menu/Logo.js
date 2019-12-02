import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <Image src={logo} alt="Dronshop Logo"/>
    )
}

export default Logo

const Image = styled.img`
  height: 85%;
  margin: auto 0;
  padding: 20px 0 0;
`;