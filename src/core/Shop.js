import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getBrand, getFilteredProducts, getTipProdus} from './apiCore'
import Checkbox from './Checkbox'
import CheckboxTipProdus from './CheckBoxTipProdus'
import RadioBox from './RadioBox'
import {prices} from './fixedPrices'
import Card from './Card'
import styled from 'styled-components'


const Shop = () => {
    // const [categories, setCategories] = useState([])
    const [brand, setBrands] = useState([])
    const [tipProdus, setTipProdus] = useState([])
    // const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [filteredResults, setFilteredResults] = useState([])

    const [myFilters, setMyFilters] = useState({
        filters:{brand: [], pret: [], tipProdus:[]}
    })

    const initBrand = () => {
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
    const initTipProdus = () => {
        getTipProdus().then(data=> {
            if(data.error) {
                setError(data.error)
            }else{
                setTipProdus(data)
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
        initBrand()
        initTipProdus()
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
                    <Left className="col-md-4">
                        <Title>
                            <H5>Brand</H5>
                        </Title>
                        <Ul className="">
                            <Checkbox brand={brand} handleFilters={ filters => handleFilters(filters, "brand")}/>
                        </Ul>
                        <Title>
                            <H5>Tip Produs</H5>
                        </Title>
                    <Ul className="">
                        <CheckboxTipProdus tipProdus={tipProdus} handleFilters={ filters => handleFilters(filters, "tipProdus")}/>
                    </Ul>
                        <Title>
                            <H5>Categorie Pret</H5>
                        </Title>
                    <Ul className="">
                        <RadioBox prices={prices} handleFilters={ filters => handleFilters(filters, "pret")}/>
                    </Ul>
                    </Left>
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
const Left = styled.div`
background: #fff;
position: sticky;
max-width: 288px;
    margin-right: 16px;
`
const Title = styled.div`
justify-content: space-between;
    border-top: 1px solid #f0f1f2;
    border-bottom: 1px solid #f0f1f2;
    padding: 16px 24px;
`
const H5 = styled.h5`
color: #3b3e40;
`
const Ul = styled.ul`
padding-top: .25rem;

margin-bottom: 16px;
    font-size: 14px;
`