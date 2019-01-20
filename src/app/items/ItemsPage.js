import React from "react";

import {Item} from "./Item";

export const ItemsPage = ({items, searchTerm, onSearch}) => (
    <>
        <h1>Items</h1>
        <input placeholder={'Filter items'}
               onChange={e => onSearch(e.target.value)}
               value={searchTerm}/>
        {items.map((item, index) => (<Item key={index} item={item}/>))}
    </>
);

