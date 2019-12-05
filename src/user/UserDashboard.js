import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth/index'

const UserDashboard = () => {

    const {user: { nume, email, role}} = isAuthenticated()

    const actualizareProfil = () => {
        return (
            <div>
                <Subtitle>Actualizare Profil</Subtitle>
                <div className="row">
                    <div className="col-md-12 col-lg-10">
                        <form>
                            <fieldset disabled>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>E-mail</label>
                                    <input type="email" className="form-control" name="account-email" id="acount-email" value={email}/>
                                </div>
                            </div>
                            </fieldset>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Nume</label>
                                    <input type="text" className="form-control" name="account-nume" id="acount-nume" placeholder={nume} value=""/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Prenume</label>
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
                                <div className="custom-control custom-checkbox mb-4">
                                    <input type="checkbox" className="custom-control-input" name="account_newsletter" id="account_newsletter"/>
                                    <Label className="custom-control-label" htmlFor="account_newsletter" >Vreau sa primesc notificari despre cel mai noi oferte, reduceri si noutati.</Label>
                                </div>
                            </div>
                            <fieldset disabled>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Categorie client:</label>
                                    <input type="email" className="form-control" name="account-email" id="acount-email" value={role===0 ?'Admin':'Client'}/>
                                </div>
                            </div>
                            </fieldset>
                            <div className="form-group">
                                <Button type="submit" className="btn btn-primary">Salvare</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    const orders = () => {
        return (
            <div>
                <Subtitle>Comenzi</Subtitle>
                ....
            </div>
        )
    }
    const address = () => {
        return (
            <div>
                <Subtitle>Adrese</Subtitle>
                ....
            </div>
        )
    }
    const passwordChange = () => {
        return (
            <div>
                <Subtitle>Modificare Parola</Subtitle>
                <div className="row">
                    <div className="col-md-12 col-lg-10">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Parola veche</label>
                                    <input type="password" className="form-control" name="old-password" id="old-password" value=""/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Parola noua</label>
                                    <input type="password" className="form-control" name="new-password" id="new-password" value=""/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Parola noua inca o data</label>
                                    <input type="password" className="form-control" name="new-password-again" id="new-password-again" value=""/>
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
                                <LiTitle>Profil</LiTitle>
                                <Li onClick={() => setRescoure(actualizareProfil())}>Actualizare Profil</Li>
                                <Li onClick={() => setRescoure(orders())}>Comenzi</Li>
                                <Li onClick={() => setRescoure(address())}>Modificare Adresa</Li>
                                <Li onClick={() => setRescoure(passwordChange())}>Modificare Parola</Li>
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
const Label = styled.label`
cursor: pointer;
    font-size: .8em;
    color: #707473;
    line-height: 2em;
    margin: 4px 0 0 10px;
`