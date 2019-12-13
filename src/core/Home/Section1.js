import React, {useState, useEffect}from 'react'
import {getProduct} from '../apiCore'
import BigCard from '../BigCard'
import styled from 'styled-components'

const Section1 = () => {

    const [singleProduct1, setSingleProduct1] =useState([])
    const [singleProduct2, setSingleProduct2] =useState([])
    const [singleProduct3, setSingleProduct3] =useState([])
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
        getProduct('5dedf75ecb14b5280850c248').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct2(data)
            }
        })
    }
    const loadProduct3 = () =>{
        getProduct('5dedf75ecb14b5280850c248').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct3(data)
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
        loadProduct3()
    },[])

    return(
            <Wrapper className="container text-center">
                <div className="row justify-content-center">
                    <BigCard product={singleProduct1}/>
                    <BigCard product={singleProduct2}/>
                    <BigCard product={singleProduct3}/>
                </div>
            </Wrapper >
    )
}
export default Section1

const Wrapper = styled.div`
    margin-bottom: 40px;
`