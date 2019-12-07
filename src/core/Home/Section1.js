import React, {useState,useEffect}from 'react'
import { getSingleProduct} from '../apiCore'
import BigCard from '../BigCard'
import styled from 'styled-components'

const Section1 = () => {

    const [singleProduct1, setSingleProduct1] =useState([])
    const [singleProduct2, setSingleProduct2] =useState([])
    const [singleProduct3, setSingleProduct3] =useState([])
    const [error, setError] =useState(false)

    const loadProduct1 = () =>{
        getSingleProduct('5dec24bde89df82f67f82ff5').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct1(data)
            }
        }) 
    }
    const loadProduct2 = () =>{
        getSingleProduct('5deba1b9df78c50a287fe629').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct2(data)
            }
        }) 
    }
    const loadProduct3 = () =>{
        getSingleProduct('5deaaa47df78c50a287fe626').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct3(data)
            }
        }) 
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
        </Wrapper>               
  
    )
}
export default Section1

const Wrapper = styled.div`
    margin-bottom: 40px;
`