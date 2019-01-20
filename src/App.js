import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {Navigation} from "./components/Navigation";
import {HomePage} from "./pages/HomePage";
import {ModelerPage} from "./pages/ModelerPage";

import css from './App.module.scss';

export default () => (
    <div className={css.app}>
        <Navigation/>
        <hr/>
        <Switch>
            <Route exact path="/" render={() => (<Redirect to={'/home'}/>)}/>
            <Route path={'/home'} component={HomePage}/>
            <Route path={'/modeler'} component={ModelerPage}/>
        </Switch>
    </div>
);
