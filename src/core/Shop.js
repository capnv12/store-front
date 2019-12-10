import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getSubCategories} from './apiCore'
import {listProducts, getBrand, getFilteredProducts} from './apiCore'
import Checkbox from './Checkbox'
import RadioBox from './RadioBox'
import {prices} from './fixedPrices'
import Card from './Card'
import styled from 'styled-components'


const Shop = () => {
    const [categories, setCategories] = useState([])
    const [brand, setBrands] = useState([])
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [filteredResults, setFilteredResults] = useState([])

    const [myFilters, setMyFilters] = useState({
        filters:{brand: [], pret: []}
    })

    const init = () => {
        // getSubCategories().then(data=> {
        //     if(data.error) {
        //         setError(data.error)
        //     }else{
        //         setCategories(data)
        //     }
        // })

        // listProducts().then(data=> {
        //     if(data.error) {
        //         setError(data.error)
        //     }else{
        //         setProducts(data)
        //     }
        // })
        getBrand().then(data=> {
            if(data.error) {
                setError(data.error)
            }else{
                setBrands(data)
            }
        })
    }


    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
            }
        });
    };

    useEffect(() => {
        init()
        loadFilteredResults(skip, limit, myFilters.filters)
    },[])

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters
        if(filterBy === "pret"){
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy] = priceValues
        }
        loadFilteredResults(myFilters.filters)
        setMyFilters(newFilters)
    }

    const handlePrice = value => {
        const data = prices
        let array = []

        for(let key in data){
            if(data[key]._id === parseInt(value)){
                array = data[key].array
            }
        }
        return array
    }
console.log(filteredResults.data)

    return(
        <Layout>
            <Wrapper className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                    <ul className="">
                                    <Checkbox brand={brand} handleFilters={ filters => handleFilters(filters, "brand")}/>
                                </ul>

                                <div className="">
                                    <RadioBox prices={prices} handleFilters={ filters => handleFilters(filters, "pret")}/>
                            </div>
                    </div>
                    <div className="col-md-8">
                    <div className="row">
                                {filteredResults.map((product, i) => (
                                                    <Card product={product} />
                                            ))}
                            </div>
                    </div>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default Shop

const Container = styled.div`
max-width: 1200px;
padding-left: 0;
padding-right: 0;
`
const Wrapper = styled.div`
    margin-bottom: 40px;
`