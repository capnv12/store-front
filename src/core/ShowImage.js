import React, { useState, useEffect } from 'react'
import {API} from '../config'
import styled from 'styled-components'

const ShowImage = ({item, url}) => {
    return(
        <Image>
            <Img src={`${API}/${url}/photo/${item._id}`} alt={item.nume} className="img-fluid" style={{maxHeight:'100%',maxWidth:'100%'}}/>
        </Image>
    )
}

export default ShowImage
const Image = styled.div`
height: 220px;
padding: 20px 0;
margin: 0;
`
const Img = styled.img`
max-height: 100%;
margin: 0 auto;
display: block;
`