import React from 'react'
import styled from 'styled-components'
import Layout from '../core/Layout'
import {NavLink} from 'react-router-dom'
// import {isAuthenticated} from '../auth/index'

const AdminDashboard = () => {

    // const {user: {_id, name, email, role}} = isAuthenticated()
    // const {user} = isAuthenticated()

    const Links = () => {
        return(
            <div className="col-md-6">
                <Ul className="list-unstyled">
                    <LiTitle>Profil Admin</LiTitle>
                        <NavLink to="/" className="nav-link"><Li>Actualizare Profil</Li></NavLink>

                    <LiTitle>Comenzi</LiTitle>

                    <NavLink to="/comenzi" className="nav-link"><Li>Comenzi</Li></NavLink>

                    <LiTitle>Adugare/Actualizare</LiTitle>

                    <NavLink to="/produse/creare/" className="nav-link"><Li>Creare Produs</Li></NavLink>
                    <NavLink to="/sub-categorie/creare/" className="nav-link"><Li>Creare Subcategorie</Li></NavLink>
                    <NavLink to="/categorie/creare/" className="nav-link"><Li>Creare Categorie</Li></NavLink>
                    <NavLink to="/produs/actualizare" className="nav-link"><Li>Actualizare Produs</Li></NavLink>
                    <NavLink to="/sub-categorie/actualizare" className="nav-link"><Li>Actualizare Subcategorie</Li></NavLink>
                    <NavLink to="/categorie/actualizare" className="nav-link"><Li>Actualizare Categorie</Li></NavLink>
                </Ul>
            </div>
        )
    }

    return(
        <Layout>
            <Wrapper className="content content-light page-account">
                <div className="container">
                    <Row className="row">
                        <div className="col-md-6">
                            <Ul className="list-unstyled">
                                {Links()}
                            </Ul>
                        </div>
                        <Right className="col-md-6 pb-3">
                            <div>
                                text
                            </div>
                        </Right>
                    </Row>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default AdminDashboard

const Wrapper = styled.div`
background-color: #fff;
padding-bottom: 1px;
    padding-top: 40px;
    height:100vh

`
const Row = styled.div`
background-color: #f7f8f9;
    margin: 0;
`
const Ul = styled.ul`
    margin: 25px 10px 15px 15px;
    & li {
        display: block;
        color: #707473;
        padding: 12px 0;
    }
`
const LiTitle = styled.li`
    font-size: 1.125em;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    word-spacing: .1em;
    color: #707473;
    text-transform: uppercase;
    margin-bottom: 10px;
`
const Li = styled.li`
    cursor:pointer;
`
const Right = styled.div`
background-color: #fff;
    padding-left: 25px;
`
// const Subtitle = styled.h1`
//     font-size: 1.125em;
//     color: #707473;
//     text-transform: uppercase;
//     line-height: 42px;
// `
// const Button = styled.button`
// text-transform: uppercase;
// text-align: center;
// border-radius: 2px;
// padding: 0 50px;
// background: #fff;
// color: #ccc;
// height: 48px;
// line-height: 48px;
// border: 1px solid #ccc;
// font-size: 16px;
// cursor: pointer;
// text-decoration: none;
// margin-right: 1rem;
// color: #fff;
//     background-color: #207abd;
//     border-color: #207abd;
// `