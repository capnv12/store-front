import React, { useState } from 'react'
import styled from 'styled-components'

const RadioBox = ({ prices, handleFilters }) => {
    const [value, setValue] = useState(0)

    const handleChange = (event) => {
        handleFilters(event.target.value)
        setValue(event.target.value)
    }
    return prices.map((p, i) => (
        <Li key={i} className="list-unstyled custom-control custom-radio">
            <input onChange={handleChange} value={p._id} name={p} type="radio" className="custom-control-input" id={p._id} />
            <label class="custom-control-label" htmlFor={p._id}>{p.nume}</label>
        </Li>
    ))
}

export default RadioBox

const Li = styled.li`
margin-top: 8px;
margin-bottom: 16px;
font-size: 16px;
padding:10px 10px 0 25px;
`