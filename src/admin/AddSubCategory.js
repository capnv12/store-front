import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../core/Layout'
import BasicLayout from '../core/BasicLayout'
import {NavLink} from 'react-router-dom'
import {isAuthenticated} from '../auth/index'
import {createSubCategory, getCategories} from './apiAdmin'

const AddSubCategory = () => {

    const [values, setValues] = useState({
        nume:'',
        categorii:[],
        loading:false,
        error:'',
        createdSubCategory: '',
        // redirectToProfile: false,
        formData: ''
    });

    const {user, token} =isAuthenticated()
    const {
        nume,
        categorii,
        loading,
        error,
        createdSubCategory,
        // redirectToProfile,
        formData} = values

        //load categories and set form data

        const init = () => {
            getCategories().then(data=> {
                if(data.error) {
                    setValues({...values, error:data.error})
                }else{
                    setValues({...values, categorii:data, formData:new FormData()})
                }
            })
        }

        useEffect(() => {
            init()
        },[])

        const handleChange = nume => event => {
            const value = event.target.value;
            formData.set(nume, value);
            setValues({ ...values, [nume]: value });
        }

        const clickSubmit = (event) => {
            event.preventDefault()
            setValues({...values, error:'',loading:true})
            createSubCategory(user._id, token, formData)
                .then(data => {
                    if(data.error){
                        setValues({...values, error:data.error})
                    }else{
                        setValues({...values, nume:'',
                        categorii:'',
                        loading:false,
                        createdSubCategory:data.nume })
                    }
                })
        }

        const newSubCategoryForm = () => {
            return(
                <form className="mb-3" onSubmit={clickSubmit}>
                    <div className="form-group">
                        <label className="text-muted">Nume</label>
                        <input onChange={handleChange('nume')} type="text" className="form-control" value={nume}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Categorie</label>
                        <select onChange={handleChange('categorie')} className="form-control">
                        <option>Alege categorie</option>
                        {categorii && categorii.map((c,i) => {
                            return(
                                <option key={i} value={c._id}>{c.nume}</option>
                            )
                        })}
                    </select>
                </div>
                <Button type="submit" className="btn btn-outline-primary ">Creare Categorie</Button>
                </form>
            )
        }
        const goBack = () => {
            return(
                <div className="mt-5">
                    <StyledNavLink to="/cont-admin"><Button>Inapoi la Dashboard</Button></StyledNavLink>
                </div>
            )
        }
        const showError = () => (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        );

        const showSuccess = () => (
            <div className="alert alert-info" style={{ display: createdSubCategory ? '' : 'none' }}>
                <h2>{` Subcategoria ${createdSubCategory} a fost creata`} </h2>
            </div>
        );

        const showLoading = () =>
            loading && (
                <div className="alert alert-success">
                    <h2>Loading...</h2>
                </div>
            );

        return (
            <Layout>
                <BasicLayout title="Creare Produs">
                    <div className="row">
                        <div className="col-md-6 offset-md-2">
                            {newSubCategoryForm()}
                            {goBack()}
                            {showError()}
                {showSuccess()}
                {showLoading()}
                        </div>
                    </div>
                </BasicLayout>
            </Layout>
        )
}

export default AddSubCategory

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