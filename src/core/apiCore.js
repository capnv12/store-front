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
export const getSubCategories = () => {
    return fetch (`${API}/sub-categorii/` && fetch (`${API}/brand/`,{
        method:"GET"
    }))
    .then(response => {
        return response.json()
    })
    .catch(err =>{
        return console.log(err)
    })
}
export const listProducts = () => {
    return fetch (`${API}/produse/`,{
        method:"GET"
    })
    .then(response => {
        return response.json()

    })
    .catch(error =>{
        return console.log(error)
    })

}
export const getBrand = () => {
    return fetch (`${API}/brand/`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err =>{
        return console.log(err)
    })
}

export const getTipProdus = () => {
    return fetch (`${API}/tipuri-produs/`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err =>{
        return console.log(err)
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

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit, skip, filters
    }

    return fetch(`${API}/produse/by/search/`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}