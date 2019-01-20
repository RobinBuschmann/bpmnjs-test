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
const routes = [
    {path: '/home', component: HomePage, title: 'Home'},
    {path: '/modeler', component: ModelerPage, title: 'Modeler'},
    {path: '/items', component: ItemsPageContainer, title: 'Items'},
];
const [defaultRoute] = routes;

export default () => (
    <Provider stores={stores}>
        <div className={css.app}>
            <Navigation routes={routes}/>
            <hr/>
            <Switch>
                <Route exact
                       path="/"
                       render={() => (<Redirect to={defaultRoute.path}/>)}/>
                {routes.map(({title, ...props}, index) => (
                    <Route key={index} {...props}/>
                ))}
            </Switch>
        </div>
    </Provider>
);
