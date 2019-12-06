import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import UserDashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'
import GlobalStyles from './GlobalStyles'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import AddSubCategory from './admin/AddSubCategory'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/logare/" exact component={Signin}/>
                <Route path="/inregistrare/" exact component={Signup}/>
                <PrivateRoute path="/cont/" exact component={UserDashboard}/>
                <AdminRoute path="/cont-admin/" exact component={AdminDashboard}/>
                <AdminRoute path="/categorie/creare/" exact component={AddCategory}/>
                <AdminRoute path="/produs/creare/" exact component={AddProduct}/>
                <AdminRoute path="/sub-categorie/creare/" exact component={AddSubCategory}/>
            </Switch>
            <GlobalStyles/>
        </BrowserRouter>


    )
}

export default Routes
