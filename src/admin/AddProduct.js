import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../core/Layout'
import BasicLayout from '../core/BasicLayout'
import {NavLink} from 'react-router-dom'
import {isAuthenticated} from '../auth/index'
import {createProduct} from './apiAdmin'

const AddProduct = () => {

    const [values, setValues] = useState({
        nume:'',
        descriere:'',
        brand:'',
        categorie:[],
        categorii:'',
        pret:'',
        pretRedus:'',
        SKU:'',
        inStoc:[],
        cantitate:'',
        tipProdus:'',
        specificatii:'',
        inTheBox:'',
        photo:'',
        loading:false,
        error:'',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });

    const {user, token} =isAuthenticated()
    const {nume,
    descriere,
    brand,
    categorie,
    categorii,
    pret,
    pretRedus,
    SKU,
    inStoc,
    cantitate,
    tipProdus,
    specificatii,
    inTheBox,
    photo,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData} = values

    useEffect(() => {
        setValues({...values, formData:new FormData()})
    },[])

    const handleChange = nume => event => {
        const value = nume === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(nume, value);
        setValues({ ...values, [nume]: value });
    };

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error:'',loading:true})
        createProduct(user._id, token, formData)
            .then(data => {
                if(data.error){
                    setValues({...values, error:data.error})
                }else{
                    setValues({...values, nume:'',
                    descriere:'',
                    brand:'',
                    categorie:'',
                    categorii:'',
                    pret:'',
                    pretRedus:'',
                    SKU:'',
                    inStoc:[],
                    cantitate:'',
                    tipProdus:'',
                    specificatii:'',
                    inTheBox:'',
                    photo:'',
                    loading:false,
                    createdProduct:data.nume })
                }
            })
    }


    const newProductForm = () => {
        return(
            <form className="mb-3" onSubmit={clickSubmit}>
                <h4>Imagine</h4>
                <div className="form-group">
                    <label className="btn btn-secondary">
                        <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*"/>
                    </label>
                </div>

                <div className="form-group">
                    <label className="text-muted">Nume</label>
                    <input onChange={handleChange('nume')} type="text" className="form-control" value={nume}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Descriere</label>
                    <textarea onChange={handleChange('descriere')} className="form-control" value={descriere}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Brand</label>
                    <input onChange={handleChange('brand')} type="text" className="form-control" value={brand}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Categorie</label>
                    <select onChange={handleChange('categorie')} className="form-control">
                        <option value="5ddfd425a92cef4c104bdf2c">Drone</option>
                        <option value="5ddfd425a92cef4c104bdf2c">FPV Racing</option>
                        <option value="5ddfd425a92cef4c104bdf2c">Piese</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Pret</label>
                    <input onChange={handleChange('pret')} type="number" className="form-control" value={pret}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Pret Redus</label>
                    <input onChange={handleChange('pretRedus')} type="number" className="form-control" value={pretRedus}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">SKU</label>
                    <input onChange={handleChange('SKU')} type="text" className="form-control" value={SKU}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">In stoc</label>
                    <select onChange={handleChange('inStoc')} className="form-control">
                        <option value="1">Da</option>
                        <option value="0">Nu</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted">Cantitate</label>
                    <input onChange={handleChange('cantitate')} type="number" className="form-control" value={cantitate}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Tip Produs</label>
                    <input onChange={handleChange('tipProdus')} type="text" className="form-control" value={tipProdus}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Specificatii</label>
                    <textarea onChange={handleChange('specificatii')} className="form-control" value={specificatii}/>
                </div>
                <div className="form-group">
                    <label className="text-muted">In the Box</label>
                    <textarea onChange={handleChange('inTheBox')} className="form-control" value={inTheBox}/>
                </div>
                <Button type="submit" className="btn btn-outline-primary ">Creare Categorie</Button>
            </form>
        )
    }

    return (
        <Layout>
            <BasicLayout title="Creare Produs">
                <div className="row">
                    <div className="col-md-6 offset-md-2">
                        {newProductForm()}
                    </div>
                </div>
            </BasicLayout>
        </Layout>
    )
}

export default AddProduct

// const StyledNavLink = styled(NavLink)`
// color: #fff;
// font-size: .815384em;
// text-decoration: none;

// &:hover {
//     color: #fff;
//     text-decoration: none;

// }
// `
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