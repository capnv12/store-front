import React, {useState, useEffect}from 'react'
import {getProduct} from '../apiCore'
import FullCard from '../FullCard'
import Card from '../Card'
import styled from 'styled-components'
import FullCardTitle from '../FullCardTitle'

import osmoHomeBg from'../../assets/osmo-home-bg.jpg'

const Section2 = () => {

    const [singleProduct1, setSingleProduct1] =useState([])
    // const [singleProduct2, setSingleProduct2] =useState([])
    // const [singleProduct3, setSingleProduct3] =useState([])
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
    // const loadProduct2 = () =>{
    //     getProduct('5dedf75ecb14b5280850c248').then(data => {
    //         if(data.error) {
    //             setError(data.error)
    //         }
    //         else{
    //             setSingleProduct2(data)
    //         }
    //     })
    // }
    // const loadProduct3 = () =>{
    //     getProduct('5dedf75ecb14b5280850c248').then(data => {
    //         if(data.error) {
    //             setError(data.error)
    //         }
    //         else{
    //             setSingleProduct3(data)
    //         }
    //     })
    // }

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

    console.log(errorFound)

    return(
        <div>
        <Wrapper className="section-2">
            <FullCardTitle title="DJI Osmo" url='/dji-osmo' />
            <FullCard product={singleProduct1} bg={osmoHomeBg}/>
        </Wrapper>
        <Container className="container">
            <div className="row">
                <Card product={singleProduct1}/>
                <Card product={singleProduct1}/>
                <Card product={singleProduct1}/>
                <Card product={singleProduct1}/>
            </div>
        </Container>
        </div>

    )
}
export default Section2

const Wrapper = styled.div`
    margin-bottom: 40px;
`
const Container = styled.div`
max-width: 1200px;
padding-left: 0;
padding-right: 0;

`