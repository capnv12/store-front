import {API} from "../config"

export const getProducts = (sortBy) => {
    return fetch (`${API}/produse?sortBy=${sortBy}&order=desc&limit=6`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err =>{
        return console.log(err)
    })
}
export const getProduct = (productId) => {
    return fetch (`${API}/produs/${productId}`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
       
    })
    .catch(error =>{
        return console.log(error)
    })
    
}

// export const getSingleProduct = (productId) => {
//     return fetch(`${API}/produs/${productId}/`, {
//         method:"GET"
//     })
//     .then(response => {
//         return response.json()
//     })
//     .catch(err => {
//         return console.log(err)
//     })
// }