import React from "react";
import {inject} from "mobx-react";

import {Item} from "../components/Item";

export const InternalItemsPage = ({items, searchTerm, onSearch}) => (
    <>
        <h1>Items</h1>
        <input placeholder={'Filter items'}
               onChange={e => onSearch(e.target.value)}
               value={searchTerm}/>
        {items.map((item, index) => (<Item key={index} item={item}/>))}
    </>
);

export const ItemsPage = inject(({stores: {itemsStore}}) => ({
    items: itemsStore.filteredItems,
    searchTerm: itemsStore.searchTerm,
    onSearch: searchTerm => itemsStore.setSearchTerm(searchTerm),
}))(InternalItemsPage);
