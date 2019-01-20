import {observable, action, decorate, computed} from "mobx";
import items from "./items";

class ItemsStore {

    items = items;
    searchTerm = '';

    get filteredItems() {
        return this.items
            .filter(({title, description}) =>
                !this.searchTerm
                || `${title}${description}`
                    .toLowerCase()
                    .includes(this.searchTerm.toLowerCase()));
    };

    setSearchTerm(searchTerm) {
        this.searchTerm = searchTerm;
    }
}

decorate(ItemsStore, {
    filteredItems: computed,
    searchTerm: observable,
    setSearchTerm: action,
});

export const itemsStore = new ItemsStore();
