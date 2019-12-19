import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import ShowImageProduct from './ShowImageProduct'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { updateItem, removeItem } from './cartHelpers'

const CartItems = ({ product, cartUpdate=false, setRun = f => f, run = undefined, lineTotal}) => {

    const [count, setCount] = useState(product.count)

    const handleChange = (productId) => event => {
        setRun(!run);
        setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
        }
    }
    const handleRemove = (productId) => {
        setRun(!run);
        removeItem(productId)
    }
    // const showCartUpdateOptions = (cartUpdate) => {
    //     return cartUpdate && <div>
    //         <div className="input-group mb-3">
    //             <div className="input-group-prepend">
    //                 <span className="input-group-text">Cantitate</span>
    //             </div>
    //             <input type="number" className="form-control" value={count} onChange={handleChange(product._id)}/>
    //         </div>
    //     </div>
    // }

    const isRedused = () => {
        if (product.pretRedus) {
            return (
                <div className="col-sm-2">{product.pretRedus} lei cu TVA</div>
            )
        } else {
            return <div className="col-sm-2">{product.pret} lei cu TVA</div>
        }
    }

    const getTotal = () => {

        if(product.pretRedus){
            return product.pretRedus * product.count
        }else{
            return product.pret * product.count
        }
    }

    return (
        <Wrapper className="row align-items-center">
            <div className="col-sm-1">
                <ShowImageProduct url="produs" item={product}/>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-4">
                {product.nume}
            </div>
            {isRedused()}
            <div className="col-sm-3 col-md-3 col-lg-2">
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)}/>
            </div>
            <div className="col-sm-2">
            {getTotal()} lei cu TVA
            </div>
            <div className="col-sm-1">
                <FontAwesomeIcon icon={faTrashAlt} onClick={() => {handleRemove(product._id)}}/>
            </div>
        </Wrapper>
    )

}

export default CartItems

const Wrapper =styled.div`
    & div {
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: .8125em;

        &:last-child {
            text-align: right;
    }
}
`