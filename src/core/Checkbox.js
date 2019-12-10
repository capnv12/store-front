import React, {useState, useEffect} from 'react'

const Checkbox = ({brand, handleFilters}) => {

    const [checked, setChecked] = useState([])

    const handleToogle = c => () => {
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]
        if(currentCategoryId === -1){
            newCheckedCategoryId.push(c)
        }else{
            newCheckedCategoryId.splice(currentCategoryId, 1)
        }
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }

    return brand.map((c, i) => (
            <li key={i} className="list-unstyled mr-2 ml-4">
                <input onChange={handleToogle(c._id)} value={checked.indexOf(c._id===-1)} type="checkbox" className="form-check-input"/>
                <label className="form-check-label">{c.nume}</label>
            </li>
        ))
}

export default Checkbox