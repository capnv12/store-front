import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import GlobalStyles from './GlobalStyles'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/logare" exact component={Signin}/>
                <Route path="/inregistrare" exact component={Signup}/>
            </Switch>
            <GlobalStyles/>
        </BrowserRouter>


    )
}

export default Routes
