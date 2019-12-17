import React from 'react'
import {API} from '../config'
import styled from 'styled-components'

const ShowImageProduct = ({item, url}) => {
    return(
        <Img src={`${API}/${url}/photo/${item._id}`} alt={item.nume}/>
    )
}

export default ShowImageProduct
const Image = styled.div`
height: 220px;
padding: 20px 0;
margin: 0;
`
const Img = styled.img`
width: auto;
max-height: none;
display: block;
margin: 10px auto 30px;
max-width: 100%;
border: 0;
`