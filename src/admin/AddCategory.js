import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from '../core/Layout'
import BasicLayout from '../core/BasicLayout'
import {NavLink} from 'react-router-dom'
import {isAuthenticated} from '../auth/index'
import {createCategory} from './apiAdmin'

const AddCategory = () => {
    const [nume, setNume] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {user, token} = isAuthenticated()

    const handleChange =(e) => {
        setError('')
        setNume(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        createCategory(user._id, token, {nume})
            .then(data =>{
                if(data.error) {
                    setError(data.error)
                }else{
                    setError('')
                    setSuccess(true)
                }
            })

    }
    const ShowSucces = () => {
        if(success) {
            return <h3 className="alert alert-info">Categoria - {nume} - a fost creata.</h3>
        }
    }
    const ShowError = () => {
        if(error) {
            return <h3 className="alert alert-danger">Categoria - {nume} - nu a putut fi creata. Numele trebuie sa fie unic.</h3>
        }
    }

    const goBack = () => {
        return(
            <div className="mt-5">
                <StyledNavLink to="/cont-admin"><Button>Inapoi la Dashboard</Button></StyledNavLink>
            </div>
        )
    }

    const newCategoryForm = () => {
        return(
            <form onSubmit={clickSubmit}>
                <div className="form-group">
                    <label className="text-muted">Nume</label>
                    <input type="text" className="form-control" onChange={handleChange} value={nume} autoFocus required/>
                </div>
                <Button type="submit" className="btn btn-outline-primary ">Creare Categorie</Button>
            </form>
        )
    }

    return (
        <Layout>
            <BasicLayout title="Creare Categorie">
                <div className="row">
                    <div className="col-md-6 offset-md-2">
                    {ShowSucces()}
                    {ShowError()}
                        {newCategoryForm()}
                        {goBack()}
                    </div>
                </div>
            </BasicLayout>
        </Layout>
    )
}

export default AddCategory

const StyledNavLink = styled(NavLink)`
color: #fff;
font-size: .815384em;
text-decoration: none;

&:hover {
    color: #fff;
    text-decoration: none;

}
`
const Button = styled.button`
text-transform: uppercase;
width:300px;
text-align: center;
border-radius: 2px;
padding: 0 50px;
background: #fff;
color: #ccc;
height: 48px;
line-height: 48px;
border: 1px solid #ccc;
font-size: 16px;
cursor: pointer;
text-decoration: none;
margin-right: 1rem;
color: #fff;
    background-color: #207abd;
    border-color: #207abd;
`