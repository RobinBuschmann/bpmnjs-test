import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Provider} from "mobx-react";

import {Navigation} from "./components/Navigation";
import {HomePage} from "./pages/HomePage";
import {ModelerPage} from "./pages/ModelerPage";
import {ItemsPage} from "./pages/ItemsPage";
import {itemsStore} from "./stores/itemsStore";

import css from './App.module.scss';

const stores = {itemsStore};

export default () => (
    <Provider stores={stores}>
        <div className={css.app}>
            <Navigation/>
            <hr/>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to={'/home'}/>)}/>
                <Route path={'/home'} component={HomePage}/>
                <Route path={'/modeler'} component={ModelerPage}/>
                <Route path={'/items'} component={ItemsPage}/>
            </Switch>
        </div>
    </Provider>
);
