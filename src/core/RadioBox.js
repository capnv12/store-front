import React, {useState, useEffect, Fragment} from 'react'

const RadioBox = ({prices, handleFilters}) => {
    const [value, setValue] = useState(0)

    const handleChange =(event) => {
        handleFilters(event.target.value)
        setValue(event.target.value)
    }

    return prices.map((p, i) => (
        <div key={i} className="">
            <input onChange={handleChange} value={p._id} name={p} type="radio" className="mr-5 ml-4"/>
            <label className="form-check-label">{p.nume}</label>
        </div>
    ))
}

export default RadioBox