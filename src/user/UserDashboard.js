import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth/index'

const UserDashboard = () => {




    const comenzi = () => {
        return (
            <div>
                <Subtitle>Comenzi</Subtitle>
                <div className="row">
                    <div className="col-md-12 col-lg-10">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>E-mail</label>
                                    <input type="email" className="form-control" name="account-email" id="acount-email" value=""/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Nume</label>
                                    <input type="text" className="form-control" name="account-nume" id="acount-nume" value=""/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>E-mail</label>
                                    <input type="text" className="form-control" name="account-prenume" id="acount-prenume" value=""/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const actualizareProfil = () => {
        return (
            <div>
                <Subtitle>Actualizare Profil</Subtitle>
                <div className="row">
                    <div className="col-md-12 col-lg-10">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>E-mail</label>
                                    <input type="email" className="form-control" name="account-email" id="acount-email" value=""/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Nume</label>
                                    <input type="text" className="form-control" name="account-nume" id="acount-nume" value=""/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>E-mail</label>
                                    <input type="text" className="form-control" name="account-prenume" id="acount-prenume" value=""/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>CNP/CUI</label>
                                    <input type="text" className="form-control" name="account-identificator" id="acount-identificator" value=""/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Telefon</label>
                                    <input type="number" className="form-control" name="account-numar" id="acount-numar" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <Button type="submit" className="btn btn-primary">Salvare</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    const [resource, setRescoure] = useState(actualizareProfil())
    return(
        <Layout>
            <Wrapper className="content content-light page-account">
                <div className="container">
                    <Row className="row">
                        <div className="col-md-3">
                            <Ul className="list-unstyled">
                                <Li>Profil</Li>
                                <li onClick={() => setRescoure(actualizareProfil())}>Actualizare Profil</li>
                                <li onClick={() => setRescoure(comenzi())}>Comenzi</li>
                                <li >Modificare Adresa</li>
                                <li >Modificare Parola</li>
                            </Ul>
                        </div>
                        <Right className="col-md-9 pb-3">
                            <div>
                                {resource}
                            </div>
                        </Right>
                    </Row>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default UserDashboard

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
const Li = styled.li`
font-size: 1.125em;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    word-spacing: .1em;
    color: #707473;
    text-transform: uppercase;
    margin-bottom: 10px;
`
const Right = styled.div`
background-color: #fff;
    padding-left: 25px;
`
const Subtitle = styled.h1`
    font-size: 1.125em;
    color: #707473;
    text-transform: uppercase;
    line-height: 42px;
`
const Button = styled.button`
text-transform: uppercase;
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