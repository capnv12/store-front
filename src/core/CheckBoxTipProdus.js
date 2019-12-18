import React, { useState } from 'react'
import styled from 'styled-components'

const CheckboxTipProdus = ({ tipProdus, handleFilters }) => {

    const [checked, setChecked] = useState([])

    const handleToogle = h => () => {
        const currentCategoryId = checked.indexOf(h)
        const newCheckedCategoryId = [...checked]
        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(h)
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1)
        }
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }

    return tipProdus.map((h, i) => (
        <Li key={i} className="list-unstyled custom-control custom-checkbox">
            <input onChange={handleToogle(h._id)} value={checked.indexOf(h._id === -1)} type="checkbox" className="custom-control-input" id={h._id} />
            <label className="form-check-label" class="custom-control-label" htmlFor={h._id} >{h.nume}</label>
        </Li>
    ))
}

export default CheckboxTipProdus

const Li = styled.li`
margin-top: 8px;
margin-bottom: 16px;
font-size: 16px;
padding:10px 10px 0 25px;
`