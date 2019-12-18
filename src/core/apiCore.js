import { API } from "../config"
import queryString from 'query-string'

export const getProducts = (sortBy) => {
    return fetch(`${API}/produse?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
export const getProduct = (productId) => {
    return fetch(`${API}/produs/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json()

        })
        .catch(error => {
            return console.log(error)
        })

}
export const getSubCategories = () => {
    return fetch(`${API}/sub-categorii/`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
export const listProducts = () => {
    return fetch(`${API}/produse/`, {
        method: "GET"
    })
        .then(response => {
            return response.json()

        })
        .catch(error => {
            return console.log(error)
        })

}
export const getBrand = () => {
    return fetch(`${API}/brand/`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}

export const getTipProdus = () => {
    return fetch(`${API}/tipuri-produs/`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
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

    return fetch(`${API}/produse/by/search/`, {
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

export const read = (slug) => {
    return fetch(`${API}/sub-categorie/${slug}`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}

export const list = params => {
    const query = queryString.stringify(params)
    console.log(query)
    return fetch(`${API}/produse/search?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}
export const readProduct = (productId) => {
    return fetch(`${API}/produs/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = (productId) => {
    return fetch(`${API}/produse/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json()

        })
        .catch(error => {
            return console.log(error)
        })

}