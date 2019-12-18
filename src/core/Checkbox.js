import React, { useState } from 'react'
import styled from 'styled-components'

const Checkbox = ({ brand, handleFilters }) => {

    const [checked, setChecked] = useState([])

    const handleToogle = c => () => {
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]
        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(c)
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1)
        }
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }

    return brand.map((c, i) => (
        <Li key={i} className="list-unstyled custom-control custom-checkbox">
            <input onChange={handleToogle(c._id)} value={checked.indexOf(c._id === -1)} type="checkbox" className="custom-control-input" id={c._id} />
            <label class="custom-control-label" htmlFor={c._id} >{c.nume}</label>
        </Li>
    ))
}

export default Checkbox

const Li = styled.li`
margin-top: 8px;
margin-bottom: 16px;
font-size: 16px;
padding:10px 10px 0 25px;
`