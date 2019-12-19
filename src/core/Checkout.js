import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {isAuthenticated} from '../auth/index'
import styled from 'styled-components'
import { FormGroup } from 'react-bootstrap'
import CartItems from './CartItems'
import Cart from './Cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast} from '@fortawesome/free-solid-svg-icons'



const Checkout = ({product, setRun = f => f, run = undefined,lineTotal}) => {

    const [resource, setRescoure] = useState()

    const getTotal = () => {
        return(
            product.reduce((currentValue, nextValue) => {
                if(nextValue.pretRedus){
                    return currentValue + nextValue.count * nextValue.pretRedus
                }else {
                    return currentValue + nextValue.count * nextValue.pret
                }
            },0)
        )
    }
    const ShippingInfo = () => {
        return(
            <Box>
                <H2>Date de Livrare</H2>
                <div className="form-row">
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_nume">Nume</label>
                        <Input type="text" className="form-control" id="order_billing_nume"/>
                    </FormGroup>
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_prenume">Prenume</label>
                        <Input type="text" className="form-control" id="order_billing_prenume"/>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_indetificator">CNP/CUI</label>
                        <Input type="text" className="form-control" id="order_billing_indetificator"/>
                        <small className="form-text text-muted">Obligatoriu pentru firme</small>
                    </FormGroup>
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_tara">Tara</label>
                        <Input type="text" className="form-control" id="order_billing_tara" defaultValue="Romania"/>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_adresa1">Adresa</label>
                        <Input type="text" className="form-control" id="order_billing_adresa1"/>
                    </FormGroup>
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_adresa2">Adresa</label>
                        <Input type="text" className="form-control" id="order_billing_adresa2" />
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_telefon">Telefon</label>
                        <Input type="text" className="form-control" id="order_billing_telefon"/>
                    </FormGroup>
                    <FormGroup className="col-md-5">
                        <label htmlFor="order_billing_email">Email</label>
                        <Input type="Email" className="form-control" id="order_billing_email" />
                    </FormGroup>
                </div>
            </Box>

        )
    }
    return (
    <div>
        <Layout>
            <Wrapper className="container">
                <form className="order_form">
                    <div className="row">
                        <div className="col-lg-8">
                            <Box className="p-4">
                                <H2>Date de Facturare</H2>
                                <div className="form-row">
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_nume">Nume</label>
                                        <Input type="text" className="form-control" id="order_billing_nume"/>
                                    </FormGroup>
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_prenume">Prenume</label>
                                        <Input type="text" className="form-control" id="order_billing_prenume"/>
                                    </FormGroup>
                                </div>
                                <div className="form-row">
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_indetificator">CNP/CUI</label>
                                        <Input type="text" className="form-control" id="order_billing_indetificator"/>
                                        <small className="form-text text-muted">Obligatoriu pentru firme</small>
                                    </FormGroup>
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_tara">Tara</label>
                                        <Input type="text" className="form-control" id="order_billing_tara" defaultValue="Romania"/>
                                    </FormGroup>
                                </div>
                                <div className="form-row">
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_adresa1">Adresa</label>
                                        <Input type="text" className="form-control" id="order_billing_adresa1"/>
                                    </FormGroup>
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_adresa2">Adresa</label>
                                        <Input type="text" className="form-control" id="order_billing_adresa2" />
                                    </FormGroup>
                                </div>
                                <div className="form-row">
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_telefon">Telefon</label>
                                        <Input type="text" className="form-control" id="order_billing_telefon"/>
                                    </FormGroup>
                                    <FormGroup className="col-md-5">
                                        <label htmlFor="order_billing_email">Email</label>
                                        <Input type="Email" className="form-control" id="order_billing_email" />
                                    </FormGroup>
                                </div>
                                <ShippingButton onClick={() => setRescoure(ShippingInfo())} className="alert alert-info col-md-5"><StyledFontAwesomeIcon icon={faShippingFast} />Livrare la alta adresa?</ShippingButton>
                                {resource}
                            </Box>
                            <Box className="p-4">
                                <H2>Metoda Livrare</H2>
                                <OrderOption>
                                    <input type="radio" value="personal" className="custom-control-input"/>
                                    <p>Ridicare personala</p>
                                </OrderOption>
                                <OrderOption>
                                    <input type="radio" value="curier" className="custom-control-input"/>
                                    <p>Livrare prin curier</p>
                                </OrderOption>
                            </Box>
                            <Box className="p-4">
                                <H2>Metoda Plata</H2>
                                <OrderOption>
                                    <input type="radio" value="personal" className="custom-control-input"/>
                                    <p>Ramburs</p>
                                </OrderOption>
                                <OrderOption>
                                    <input type="radio" value="curier" className="custom-control-input"/>
                                    <p>Transfer Bancar</p>
                                </OrderOption>
                                <OrderOption>
                                    <input type="radio" value="curier" className="custom-control-input"/>
                                    <p>Card bancar</p>
                                </OrderOption>
                            </Box>

                        </div>
                        <div className="col-lg-4">
                            <Box className="p-4">

                            {product.map((product, i) => {
                    return(
                        <CartItems key={i} product={product} cartUpdate={true} showRemoveProductButton={true} run={run} setRun={setRun} lineTotal={lineTotal()}/>
                    )
                })}
                            </Box>
                        </div>
                    </div>
                </form>
            </Wrapper>
        </Layout>
    </div>
    )
}

export default Checkout

const Wrapper = styled.div`
@media (min-width: 1200px){
    max-width: 1200px;
    padding-left: 0;
    padding-right: 0;
`
const Box = styled.div`
margin-bottom: 2rem;
background-color: #fff;
`
const H2 = styled.h2`
font-size: 1em;
    line-height: 24px;
`
const Input = styled.input`
border-radius: 2px;
    border: 1px solid #ddd;
    font-size: .875em;
    padding: .782rem .75rem;
    height: auto;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-right:5px;
`
const ShippingButton = styled.div`
    cursor:pointer;
`
const OrderOption = styled.div`
    margin-bottom: 10px;
    border: 1px solid rgba(68,168,242,.5);
    background: rgba(68,168,242,.1);
    padding: 10px;
`