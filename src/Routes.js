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
import Shop from './core/Shop'

//pages
import SeriaMavic from './core/Pages/SeriaMavic'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/logare/" exact component={Signin}/>
                <Route path="/inregistrare/" exact component={Signup}/>
                <Route path="/shop/" exact component={Shop}/>
                <PrivateRoute path="/cont/" exact component={UserDashboard}/>
                <AdminRoute path="/cont-admin/" exact component={AdminDashboard}/>
                <AdminRoute path="/categorie/creare/" exact component={AddCategory}/>
                <AdminRoute path="/produs/creare/" exact component={AddProduct}/>
                <AdminRoute path="/sub-categorie/creare/" exact component={AddSubCategory}/>

                {/* pages */}

                <Route path="/seria-mavic" exact component={SeriaMavic}/>
            </Switch>
            <GlobalStyles/>
        </BrowserRouter>


    )
}

export default Routes
