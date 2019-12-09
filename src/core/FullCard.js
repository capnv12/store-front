import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ShowImage from './ShowImage'



const FullCard = ({product, bg}) => {

    const isReduced = () => {
        if(product.pretRedus){
            return(
                <P>{product.pretRedus}  lei cu TVA <br/><span style={{textDecoration: 'line-through'}}>{product.pret} lei</span></P>
            )
        }else {
            return <P>{product.pret} lei cu TVA </P>
        }
    }

    return(
        <Wrapper className="">

            <MainContainer style={{backgroundImage:`url(${bg})`}}>
                <Container className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-6">
                        <StyledLink to="/">
                            <Box className="align-middle">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 text-center">
                                        <ShowImage item={product} url="produs"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <Text>
                                            <H4>{product.nume}</H4>
                                            <H5>{product.subtitlu}</H5>
                                            {isReduced()}
                                        </Text>
                                    </div>
                                </div>
                            </Box>
                        </StyledLink>
                        </div>
                    </div>
                </Container>
            </MainContainer>
        </Wrapper>
    )
}

export default FullCard

const Wrapper = styled.div`
`
const MainContainer = styled.div`
position: relative;
    width: 100%;
    max-width: 1600px;
    padding-top: 50px;
    font-weight: 300;
    box-sizing: border-box;
    margin: 0 auto 10px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: transparent;
`
const Container =styled.div`
`
const StyledLink = styled(Link)`
color: #333;
text-decoration:none;
transition: all .3s;

    &a{
        color: #333;
text-decoration:none;
    }
    &a:hover{
        color: #333;
text-decoration:none;
    }

    &hover{
        color: #333;
text-decoration:none;
    }
`
const Box = styled.div`
background: #fff;
    // height: 240px;
    position: relative;
    margin: -10px;
    padding-bottom:10px;
    transition: all .3s ease;
    &:hover{
        box-shadow: 0 15px 15px -10px rgba(0,0,0,.15);
        transition: all .3s ease;
        color: #333 !important;
            text-decoration: none !important;
    }
`
const Text = styled.div`
padding: 0 20px 0 0;

`
const H4 = styled.h4`
font-size: 1.125em;
line-height: 1.2em;
height: 2.4em;
font-weight: 300;
overflow: hidden;
text-align: center;
`
const H5 = styled.h5`
text-align: center;
font-size: 1em;
line-height: 1.2em;
padding: 5px;

`


const P = styled.p`
    color: #207abd;
    font-size: 16px;
    text-align: center;
`
