import React from 'react'
import Layout from './Layout'
// import {getProducts, getProduct} from './apiCore'
// import Card from './Card'
import Section1 from './Home/Section1'
import Section2 from './Home/Section2'
import Section3 from './Home/Section3'
import Section4 from './Home/Section4'
import Section5 from './Home/Section5'
import Slider from './Home/Slider'

const Home = () => {

    // const [productsByCategory, setProductsByCategory] =useState([])
    // const [productsBySell, setProductsBySell] =useState([])
    // const [productsByArrival, setProductsByArrival] =useState([])
    // const [singleProduct, setSingleProduct] =useState([])
    // const [error, setError] =useState(false)

    // const loadProductsByCategory = () => {
    //     getProducts('5de10503031d133da8d1854b').then(data => {
    //         if(data.error) {
    //             setError(data.error)
    //         }
    //         else{
    //             setProductsByCategory(data)
    //         }
    //     })

    // }
    // const loadProductsBySell = () => {
    //     getProducts('sold').then(data => {
    //         if(data.error) {
    //             setError(data.error)
    //         }
    //         else{
    //             setProductsBySell(data)
    //         }
    //     })

    // }
    // const loadProductsByArrival = () => {
    //     getProducts('createdAt').then(data => {
    //         if(data.error) {
    //             setError(data.error)
    //         }
    //         else{
    //             setProductsByArrival(data)
    //         }
    //     })

    // }

    // const loadSingleProduct = () =>{
    //     getProduct('5deaa98bdf78c50a287fe625').then(data => {
    //         if(data.error) {
    //             setError(data.error)
    //         }
    //         else{
    //             setSingleProduct(data)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     loadProductsBySell()
    //     loadProductsByCategory()
    //     loadProductsByArrival()
    //     loadSingleProduct()
    // },[])

    return(
        <Layout>
            <Slider/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
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
            </h2>
            <h2 className="mb4">
                Cele mai noi
                {productsByCategory.map((product, i) => {
                    return(
                        <Card key={i} product={product}/>
                    )
                })}
            </h2> */}
        </Layout>
    )
}

export default Home