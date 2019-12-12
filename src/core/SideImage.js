import React from 'react'
import styled from 'styled-components'

const SideImage = ({image, alt}) => {

    return(
        <Wrapper className="col-md-9 col-lg-6 ">
                <ListItem>
                    <div className="row align-items-center">
                            <img src={image} className="img-fluid" alt={alt}/>
                    </div>
                </ListItem>
        </Wrapper>
    )
}

export default SideImage

const Wrapper = styled.div`
`
const ListItem =styled.div`
height: 100%;
overflow: hidden;
padding: 0 0 20px 0px;
transition: all .3s ease;
`