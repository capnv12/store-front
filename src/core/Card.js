import React from 'react'
import { NavLink } from 'react-router-dom'
import ShowImage from './ShowImage'
import styled from 'styled-components'

const Card = ({ product, url = '/' }) => {

    const isRedused = () => {
        if (product.pretRedus) {
            return (
                <P>{product.pretRedus} lei cu TVA <br /><span style={{ textDecoration: 'line-through' }}>{product.pret} lei</span></P>
            )
        } else {
            return <P>{product.pret} lei cu TVA</P>
        }
    }

    return (
        <Wrapper className="col-md-6">
            <ListItem>
                <StyledNavLink to={`/produs/${product._id}`}>
                    <ShowImage url="produs" item={product} />
                    <H4>{product.nume}</H4>
                    {isRedused()}
                </StyledNavLink>
            </ListItem>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
padding-left: 5px;
padding-right: 5px;
padding-bottom: 10px;
`
const ListItem = styled.div`
background-color: #fff;
height: 100%;
overflow: hidden;
padding: 0 20px 20px;
transition: all .3s ease;
&:hover{
    box-shadow: 0 15px 15px -10px rgba(0,0,0,.15);
    transition: all .3s ease;
}
`
const StyledNavLink = styled(NavLink)`
color: #333;
text-decoration:none;
&:hover {
    color: #207abd;
    text-decoration: none;

}
`
const H4 = styled.h4`
font-size: 1.125em;
line-height: 1.2em;
height: 2.4em;
margin-bottom: 20px;
padding: 0 20px;
font-weight: 300;
overflow: hidden;
text-align: center;
`

const P = styled.p`
    margin: 0;
    color: #207abd;
    font-size: 16px;
    text-align: center;
`
