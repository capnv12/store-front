import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'
import { getCart, removeItem } from './cartHelpers'
import CartItems from './CartItems'
import styled from 'styled-components'

const Cart = ({product,showRemoveProductButton = false}) => {
    const [items, setItems] = useState([])
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart())
    },[run])

    const showRemoveButton = showRemoveProductButton => {
        return (
          showRemoveProductButton && (
            <button
              onClick={() => {
                removeItem(product._id);
                setRun(!run); // run useEffect in parent Cart
              }}
              className="btn btn-outline-danger mt-2 mb-2"
            >
              Remove Product
            </button>
          )
        );
      };

    const showItems = (items) => {
        return(
            <Container className="container">
                <Subtitle>Continutul cosului - {`${items.length}`} produse</Subtitle>
                <CartContainer className="mb-2">
                    <div className="row align-items-center">
                        <div className="col-sm-4 col-md-4 col-lg-5">Produs</div>
                        <div className="col-sm-2">Pret</div>
                        <div className="col-sm-3 col-md-3 col-lg-2">Cantitate</div>
                        <div className="col-sm-2">Total</div>
                        <div className="col-sm-1"></div>
                    </div>
                </CartContainer>
                {items.map((product, i) => {
                    return(
                        <CartItems key={i} product={product} cartUpdate={true} showRemoveProductButton={true} run={run} setRun={setRun}/>
                    )
                })}
                <CartTotal className="row align-items-center">
                    <div className="col-sm-7"></div>
                    <div className="col-sm-5">
                        Total: <strong>Pret total</strong>
                    </div>
                </CartTotal>
                <CartTotal className="row align-items-center">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-7">
                        <StyledLinkSilent className="btn" to="/">Mai caut</StyledLinkSilent>
                        <StyledLink className="btn" to="/">Finalizare Comanda</StyledLink>
                    </div>
                </CartTotal>
            </Container>
        )
    }
    const noItems = () => {
        return(
            <h2>Cosul este gol. <br/> <Link to="/">Continua cumparaturile</Link></h2>
        )
    }
    return(
        <Layout>
            <Wrapper>
                    {items.length > 0 ? showItems(items):noItems()}
            </Wrapper>
            {showRemoveButton(showRemoveProductButton)}
        </Layout>
    )
}

export default Cart
const Wrapper = styled.div`
background-color: #fff;
padding-bottom: 1px;
    padding-top: 40px;
`
const Container = styled.div`
@media (min-width: 1200px){
    max-width: 1200px;
    padding-left: 0;
    padding-right: 0;
}
`
const Subtitle = styled.h2`
font-size: 1.125em;
    color: #707473;
    text-transform: uppercase;
    line-height: 42px;
`
const CartContainer = styled.div`
color: #777;
border-bottom: 1px solid #dcdcdc;
    & div {
        font-weight: 700;
        text-transform: uppercase;

        & div {
            padding-top: 8px;
            padding-bottom: 8px;
            font-size: .8125em;

            &:last-child {
                text-align: right;
        }
    }
`
const CartTotal = styled.div`
border-bottom: 1px solid #dcdcdc;
& div {
    padding-top: 2rem;
    padding-bottom: 2rem;
`
const StyledLinkSilent = styled(Link)`
transition: all .3s;
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
    color: #207abd;
    background-color: #fff;
    border-color: #207abd;


`
const StyledLink = styled(Link)`
transition: all .3s;
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
    margin: 0;
    color: #fff;
    background-color: #207abd;
    border-color: #207abd;
`