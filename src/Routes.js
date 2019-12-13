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
import ScrollToTop from './scrollToTop'

//pages
import SeriaMavic from './core/ProductPages/SeriaMavic'
import SeriaTello from './core/ProductPages/SeriaTello'
import SeriaRobomaster from './core/ProductPages/SeriaRobomaster'
import SeriaPhantom from './core/ProductPages/SeriaPhantom'
import SeriaOsmo from './core/ProductPages/SeriaOsmo.js'
import SeriaFPV from './core/ProductPages/SeriaFPV.js'
import SeriaInspire from './core/ProductPages/SeriaInspire.js'
import SeriaRonin from './core/ProductPages/SeriaRonin'
import SeriaEnterprise from './core/ProductPages/SeriaEnterprise.js'
import SeriaPowerVison from './core/ProductPages/SeriaPowerVison.js'


const Routes = () => {
    return (
        <BrowserRouter>
        <ScrollToTop/>
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
                <Route path="/seria-tello" exact component={SeriaTello}/>
                <Route path="/seria-robomaster" exact component={SeriaRobomaster}/>
                <Route path="/seria-phantom" exact component={SeriaPhantom}/>
                <Route path="/seria-osmo" exact component={SeriaOsmo}/>
                <Route path="/seria-fpv" exact component={SeriaFPV}/>
                <Route path="/seria-inspire" exact component={SeriaInspire}/>
                <Route path="/seria-ronin" exact component={SeriaRonin}/>
                <Route path="/seria-enterprise" exact component={SeriaEnterprise}/>
                <Route path="/seria-powervison" exact component={SeriaPowerVison}/>
            </Switch>
            <GlobalStyles/>
        </BrowserRouter>


    )
}

export default Routes
