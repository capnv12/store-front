import React, {useState, useEffect}from 'react'
import PageLayout from './PageLayout'
import PageCard from '../PageCard'
import {getProduct} from '../apiCore'
import styled from 'styled-components'

import mavic2Page from '../../assets/mavic2-page.jpg'
import mavicMiniSide from '../../assets/mavic-mini-side.jpg'

const SeriaMavic = () => {
    const [singleProduct1, setSingleProduct1] =useState([])
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
    const errorFound = () =>{
        if(error){
            return <h1>a aparut o eroare</h1>
        }
    }
    useEffect(() => {
        loadProduct1()
        // loadProduct2()
        // loadProduct3()
    },[])
    return(
        <PageLayout banner={mavic2Page} name={"Seria Mavic"}>
            <Container className="container">
                <H2>Mavic</H2>
                <Row className="row align-items-center" style={{backgroundColor:"#fff"}}>
                    <PageCard product={singleProduct1}/>
                    <div className="col-md-9 col-lg-6" style={{padding:"0"}}>
                        <Img src={mavicMiniSide}/>
                    </div>
                </Row>
            </Container>
        </PageLayout>
    )
}

export default SeriaMavic
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
const Img = styled.img`
width: 100%;
height: 100%;
`