import React, {useState, useEffect} from 'react'
import {getSubCategories, list} from './apiCore'
import SmallCard from './SmallCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const SearchBar = ({searchSubmit, handleChange}) => {


    const searchForm = () => {
        return(
            <Form onSubmit={searchSubmit} className="form-inline  header-search">
                {/* <span className="input-group-text">
                    <div className="input-group input-group-lg"> */}
                        {/* <div className="input-group-prepend">
                            <select className="btn mr-2" onChange={handleChange('categorie')}>
                                <option value="All">Alege o categorie</option>
                                {categorii.map((c,i) => {
                                    return(
                                        <option key={i} value={c._id}>{c.nume}</option>
                                    )
                                })}
                            </select>
                        </div> */}
                        <Input type='search' className="form-control mr-sm-2 header-search-input" onChange={handleChange} placeholder="Cauta"/>
                    {/* </div> */}
                    {/* <div className="btn input-group-append"> */}
                        <Button className="btn my-2 my-lg-0"><FontAwesomeIcon icon={faSearch} /></Button>
                    {/* </div> */}
                {/* </span> */}
            </Form>
        )
    }

    return(
        <Wrapper>
            {searchForm()}
        </Wrapper>
    )
}

export default SearchBar
const Wrapper = styled.div`
margin:auto 0;
`
const Form = styled.form`
border-bottom: 1px solid #fff;
padding: 4px 0;
margin:0 auto;
transition: all .3s;
`
const Input = styled.input`
width: 13rem;
    border: 0;
`
const Button = styled.button`
display: block;
    width: 35px;
    height: 35px;
    margin: 14px 5px;
    line-height: 1.5;
    border: 0;
    padding: .375rem .75rem;
`