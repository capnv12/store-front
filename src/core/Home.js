import React, {useState,useEffect}from 'react'
import Layout from './Layout'
import {getProducts, getSingleProduct} from './apiCore'
import Card from './Card'
import Section1 from './Home/Section1'
import Slider from './Home/Slider'

const Home = () => {

    const [productsBySell, setProductsBySell] =useState([])
    const [productsByArrival, setProductsByArrival] =useState([])
    const [singleProduct, setSingleProduct] =useState([])
    const [error, setError] =useState(false)

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setProductsBySell(data)
            }
        })    
    
    }
    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setProductsByArrival(data)
            }
        })    
    
    }

    const loadSingleProduct = () =>{
        getSingleProduct('5deaa98bdf78c50a287fe625').then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
                setSingleProduct(data)
            }
        }) 
    }

    useEffect(() => {
        loadProductsBySell()
        loadProductsByArrival()
        loadSingleProduct()
    },[])

    return(
        <Layout>
            <Slider/>
            <Section1/>
            {/* <h2 className="mb4">
                Cele mai vandute
                {productsBySell.map((product, i) => {
                    return(
                        <Card key={i} product={product}/>
                    )
                })}
            </h2>
            <h2 className="mb4">
                Cele mai noi
                {productsByArrival.map((product, i) => {
                    return(
                        <Card key={i} product={product}/>
                    )
                })}
            </h2> */}
        </Layout>
    )
}

export default Home