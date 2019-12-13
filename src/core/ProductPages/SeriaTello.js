import React, {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

import ListGroup from 'react-bootstrap/ListGroup'
import PageLayout from './PageLayout'
import PageCard from '../PageCard'
import SmallCard from '../SmallCard'
import SideImage from '../SideImage'
import {getProduct} from '../apiCore'
import styled from 'styled-components'

import telloPage from '../../assets/tello-page.jpg'
import telloSide from '../../assets/tello-side.jpg'

const SeriaTello = () => {
    const [singleProduct1, setSingleProduct1] =useState([])
    const [singleProduct2, setSingleProduct2] =useState([])
    const [error, setError] =useState(false)





    const loadProduct1 = () =>{
        getProduct('5dedf75ecb14b5280850c248').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct1(data)
            }
        })
    }
    const loadProduct2 = () =>{
        getProduct('5de4cb284021f51f4845b2b5').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct2(data)
            }
        })
    }
    const errorFound = () =>{
        if(error){
            return <h1>a aparut o eroare</h1>
        }
    }
    useEffect(() => {
        loadProduct1()
        loadProduct2()
        // loadProduct3()
    },[])

    const AccesoriiTello = () => {
        return(
            <Row2 className="row mb-3">
                <SmallCard product={singleProduct1}/>
                <SmallCard product={singleProduct1}/>
                <SmallCard product={singleProduct1}/>
                <SmallCard product={singleProduct1}/>
                <SmallCard product={singleProduct1}/>
                <SmallCard product={singleProduct1}/>
                <SmallCard product={singleProduct1}/>
                <Wrapper className="col-sm-6 col-md-6 col-lg-3">
                    <Link to='/'>
                        <ListItem className="">
                            <P>Toate accesoriile <br/><StyledFontAwesomeIcon icon={faArrowCircleRight}/></P>
                        </ListItem>
                    </Link>
                </Wrapper>
            </Row2>
        )
    }


    const [resource, setRescoure] = useState()

    return(
        <PageLayout banner={telloPage} name={"Tello"}>
            <Container className="container">
                <H2>Tello</H2>
                <Row className="row mb-4">
                    <PageCard product={singleProduct1}/>
                    <SideImage image={telloSide} alt="tello"/>
                    <PageCard product={singleProduct2}/>
                    <PageCard product={singleProduct1}/>
                    <PageCard product={singleProduct1}/>
                    <PageCard product={singleProduct1}/>
                </Row>
                <H2>Accesorii</H2>
                <StyledListGroup>
                <ListGroup className="row mb-3" horizontal defaultActiveKey="#accesorii-tello">
                    <StyledListItem className="col-md-2" action href="#accesorii-tello" onClick={() => setRescoure(AccesoriiTello())}>Tello</StyledListItem>
                </ListGroup>
                </StyledListGroup>

                    {resource ? resource :

                <Row2 className="row mb-3">
                    <SmallCard product={singleProduct1}/>
                    <SmallCard product={singleProduct1}/>
                    <SmallCard product={singleProduct1}/>
                    <SmallCard product={singleProduct1}/>
                    <SmallCard product={singleProduct1}/>
                    <SmallCard product={singleProduct1}/>
                    <SmallCard product={singleProduct1}/>
                    <Wrapper className="col-sm-6 col-md-6 col-lg-3">
                    <Link to='/'>
                        <ListItem className="">
                            <P>Toate accesoriile <br/><StyledFontAwesomeIcon icon={faArrowCircleRight}/></P>
                        </ListItem>
                    </Link>
                </Wrapper>
                </Row2>}
            </Container>
        </PageLayout>
    )
}


export default SeriaTello
const Container = styled.div`
@media (min-width: 1200px){
    max-width: 1200px;
    padding-left: 0;
    padding-right: 0;
}
`
const H2 = styled.h2`
font-weight: 300;
font-size: 1.625em;
    margin-bottom: 15px;
    line-height: 1.4;
`
const Row = styled.div`
padding: 0;
`
const Row2 = styled.div`
margin: 0 -5px 10px;
`
const StyledListGroup = styled.div`
    margin-bottom: 40px;
`

const StyledListItem = styled(ListGroup.Item)`
    border:0px;
    margin-right:5em;
    border-radius:5px;
`
const Wrapper = styled.div`
padding-left: 5px;
padding-right: 5px;
padding-bottom: 10px;
`
const ListItem =styled.div`
background-color: #fff;
height: 100%;
overflow: hidden;
padding: 0 20px 20px;
transition: all .3s ease;
position: relative;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
&:hover{
    box-shadow: 0 15px 15px -10px rgba(0,0,0,.15);
    transition: all .3s ease;
    color:#207abd;
}
`
const P = styled.p`
font-size: 1.6em;
line-height: 1.2em;
height: 2.4em;
padding: 0 20px;
font-weight: 300;
overflow: hidden;
text-align: center;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left:5px;
`