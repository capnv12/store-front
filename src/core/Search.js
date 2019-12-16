import React, {useState, useEffect} from 'react'
import {getSubCategories, list} from './apiCore'
import SmallCard from './SmallCard'

const Search = () => {

    const [data, setData] = useState({
        categorii:[],
        categorie:'',
        search:'',
        result:[],
        searched:false
    })

    const {categorii, categorie, search, result, searched} = data

    const loadCategories = () => {
        getSubCategories().then(data => {
            if(data.error) {
                console.log(data.error)
            }else{
                setData({...data, categorii:data})
            }
        })
    }

    useEffect(() => {
        loadCategories()
    },[])

    const searchData = () => {
        // console.log(search,categorie)
        if(search){
            list({search: search || undefined, categorie:categorie})
            .then(response => {
                if(response.error) {
                    console.log(response.error)
                }else{
                    setData({...data, result:response, searched:true})
                }
            })
        }
    }

    const searchSubmit = (e) => {
        e.preventDefault()
        searchData()
    }
    const handleChange = (nume) => (event) => {
        setData({...data, [nume]: event.target.value, searched:false})
    }

    const searchedProducts = (result=[]) => {
        return(
            <div className="row">
                {result.map((product,i) => {
                    return(
                        <SmallCard key={i} product={product}/>
                    )
                })}
            </div>
        )
    }

    const searchForm = () => {
        return(
            <form onSubmit={searchSubmit}>
                <span className="input-group-text">
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <select className="btn mr-2" onChange={handleChange('categorie')}>
                                <option value="All">Alege o categorie</option>
                                {categorii.map((c,i) => {
                                    return(
                                        <option key={i} value={c._id}>{c.nume}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <input type='search' className="form-control" onChange={handleChange('search')} placeholder="Cauta"/>
                    </div>
                    <div className="btn input-group-append">
                        <button className="input-group-text">Cauta</button>
                    </div>
                </span>
            </form>
        )
    }

    return(
        <div className="row">
            <div className="container mb-3">
                {searchForm()}
            </div>
            <div className="container-fluid mb-3">
                {searchedProducts(result)}
            </div>
        </div>
    )
}

export default Search