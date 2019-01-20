import {inject} from "mobx-react";
import {ItemsPage} from "./ItemsPage";

export const ItemsPageContainer = inject(({stores: {itemsStore}}) => ({
    items: itemsStore.filteredItems,
    searchTerm: itemsStore.searchTerm,
    onSearch: searchTerm => itemsStore.setSearchTerm(searchTerm),
}))(ItemsPage);
