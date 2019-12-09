import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'

const FullCardTitle = ({title, url}) => {
    return (
        <div className="container">
            <MainTitle>
                <h2>{title}</h2>
                <StyledLink to={url}>Mai mult<StyledFontAwesomeIcon icon={faChevronRight} /></StyledLink>
            </MainTitle>
        </div>
    )
}

export default FullCardTitle

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left:5px;
`
const MainTitle = styled.div`
position: relative;
`
const StyledLink= styled(Link)`
position: absolute;
right: 0;
top: 0;
font-size: 1.125em;
text-transform: capitalize;
margin-left: 30px;
font-weight: 300;
display: flex;
height: 100%;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`