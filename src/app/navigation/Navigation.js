import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Navigation.module.scss';

export const Navigation = ({routes}) => (
    <ul className={css.navigation}>
        {routes.map(({path, title}, index) => (
            <li key={index}>
                <NavLink to={path}>{title}</NavLink>
            </li>
        ))}
    </ul>
);
