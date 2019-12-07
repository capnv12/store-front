import {API} from "../config"

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/categorie/creare/${userId}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}
export const createSubCategory = (userId, token, subCategory) => {
    return fetch(`${API}/sub-categorie/creare/${userId}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: subCategory
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}
export const createProduct = (userId, token, product) => {
    return fetch(`${API}/produs/creare/${userId}`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}
export const getCategories = () => {
    return fetch (`${API}/categorii/`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err =>{
        return console.log(err)
    })
}
export const getSubCategories = () => {
    return fetch (`${API}/sub-categorii/`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err =>{
        return console.log(err)
    })
}