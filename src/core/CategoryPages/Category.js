import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
import CategoryLayout from './CategoryLayout'
import { getBrand, getFilteredProducts, getTipProdus, read } from '../apiCore'
// import Checkbox from '../Checkbox'
// import CheckboxTipProdus from '../CheckBoxTipProdus'
// import RadioBox from '../RadioBox'
// import {prices} from '../fixedPrices'
import Card from '../Card'


const Category = (props) => {
    const [category, setCategory] = useState({})
    const [error, setError] = useState(false)

    const loadCategoryProducts = slug => {
        read(slug).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategory(data)
            }
        })
    }

    useEffect(() => {
        const categorySlug = props.match.params.slug
        loadCategoryProducts(categorySlug)
    }, [])

    return (
        <CategoryLayout>
            <Card product={category} />
        </CategoryLayout>
    )
}

export default Category

