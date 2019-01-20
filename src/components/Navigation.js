import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Navigation.module.scss';

export const Navigation = () => (
    <ul className={css.navigation}>
        <li><NavLink to={'/home'}>Home</NavLink></li>
        <li><NavLink to={'/modeler'}>Modeler</NavLink></li>
    </ul>
);
