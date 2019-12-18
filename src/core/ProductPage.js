import React, { useState, useEffect } from 'react'
import { readProduct, listRelated } from './apiCore'
import Layout from './Layout'
import styled from 'styled-components'
import ShowImageProduct from './ShowImageProduct'
import ListGroup from 'react-bootstrap/ListGroup'
import SmallCard from './SmallCard'

const Product = (props) => {

    const [product, setProduct] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])
    const [error, setError] = useState(false)
    const [resource, setRescoure] = useState()

    const loadSingleProduct = productId => {
        readProduct(productId).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProduct(data)

                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error)
                    } else {
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }



    useEffect(() => {
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    }, [props])

    const isReduced = () => {
        if (product.pretRedus) {
            return (
                <Price style={{ color: '#de3c49' }}>{product.pretRedus}  lei cu TVA <br /><Span>{product.pret} lei</Span></Price>
            )
        } else {
            return <Price>{product.pret} lei cu TVA </Price>
        }
    }
    const inStoc = () => {
        if (product.cantitate > 0) {
            return (
                <InStoc>Produsul este in stoc</InStoc>
            )
        } else {
            return (
                <InStoc>Produsul momental nu este disponibil</InStoc>
            )
        }
    }

    const Descriere = () => {
        return (
            <div className="tab-content">
                <div className="row">
                    <div className="col-md-9">
                        {product.descriere}
                    </div>
                </div>
            </div>
        )
    }
    const Specificatii = () => {
        return (
            <div className="tab-content">
                <div className="row">
                    <div className="col-md-9">
                        {product.specificatii}
                    </div>
                </div>
            </div>
        )
    }
    const InTheBox = () => {
        return (
            <div className="tab-content">
                <div className="row">
                    <div className="col-md-9">
                        {product.inTheBox}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <Wrapper>
                <Container className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <ProductGallery>
                                <ShowImageProduct item={product} url="produs" />
                            </ProductGallery>
                        </div>
                        <div className="col-md-6">
                            <H1>{product.nume}</H1>
                            {isReduced()}
                            <ShortDescription>
                                {product.descriereScurta}
                            </ShortDescription>
                            <Button>Adauga in cos</Button>
                            {inStoc()}
                        </div>
                        <StyledListGroup>
                            <ListGroup horizontal defaultActiveKey="#descriere">
                                <StyledListItem className="col-sm-4" action href="#descriere" onClick={() => setRescoure(Descriere())}>Descriere</StyledListItem>
                                <StyledListItem className="col-sm-4" action href="#specificatii" onClick={() => setRescoure(Specificatii())}>Specificatii</StyledListItem>
                                <StyledListItem className="col-sm-4" action href="#in-the-box " onClick={() => setRescoure(InTheBox())}>In the Box</StyledListItem>
                            </ListGroup>
                        </StyledListGroup>
                        {resource ? resource :
                            <div className="tab-content">
                                <div className="row">
                                    <div className="col-md-9">
                                        {product.descriere}
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className="row">
                        <h4>Produse Legate</h4>
                        {relatedProduct.map((product, i) => {
                            return (
                                <SmallCard key={i} product={product} />
                            )
                        })}
                    </div>
                </Container>
            </Wrapper>
        </Layout>
    )
}

export default Product

const Wrapper = styled.div`
background-color: #fff;
padding-bottom: 1px;
    padding-top: 40px;
`
const ProductGallery = styled.div`
text-align: center;
`
const H1 = styled.h1`
font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    margin-bottom: 20px;
    margin-top: 20px;
`
const Container = styled.div`
@media (min-width: 1200px){
    max-width: 1200px;
    padding-left: 0;
    padding-right: 0;
}
`
const Price = styled.div`
font-size: 1.625em;
font-family: "Gotham","Helvetica Neue","Microsoft YaHei",Arial,sans-serif;
font-weight: 300;
`
const Span = styled.span`
color: #707473;
    font-size: 0.82em;
    text-decoration: line-through;
    display: block;
`
const ShortDescription = styled.div`
border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 30px 0;
    margin: 30px 0;
`
const Button = styled.button`
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
    color: #fff;
    background-color: #207abd;
    border-color: #207abd;
`
const StyledListGroup = styled.div`
    margin-bottom: 40px;
    border-radius:5px;
`

const StyledListItem = styled(ListGroup.Item)`
    border:0px;
    margin:0 5px 5px 5px;
    border-radius:5px;
`
const InStoc = styled.div`
 margin: 20px 0;
 line-height: 1.5em;
 color: #707473;
 font-size: .875em;
 `