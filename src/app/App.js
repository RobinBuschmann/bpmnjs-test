import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Provider} from "mobx-react";

import {Navigation} from "./navigation/Navigation";
import {HomePage} from "./home/HomePage";
import {ModelerPage} from "./modeler/ModelerPage";
import {ItemsPageContainer} from "./items/ItemsPageContainer";
import {itemsStore} from "./items/itemsStore";

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
                <Route path={'/items'} component={ItemsPageContainer}/>
            </Switch>
        </div>
    </Provider>
);
