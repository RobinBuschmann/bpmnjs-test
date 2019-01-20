import "../../jest-setup";

import {mount} from "enzyme";
import React from "react";

import {MemoryRouter} from "react-router-dom";

import App from "./App";
import {Item} from "./items/Item";
import items from "./items/items";

let wrapper;

beforeAll(() => {
    wrapper = mount(
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
            <App/>
        </MemoryRouter>
    );
});

it('renders home page as default', () => {
    const HomeTitle = <h1>Home</h1>;

    expect(wrapper.contains(HomeTitle)).toEqual(true);
});

it('renders modeler page with bpmn modeler after clicking on "/modeler" link', () => {
    const ModelerTitle = <h1>Modeler</h1>;
    wrapper.find('[href="/modeler"]').simulate("click", {button: 0});

    expect(wrapper.contains(ModelerTitle)).toEqual(true);
    expect(wrapper.html()).toMatch(/.bjs-container/);
});

it('renders items page with items after clicking on "/items" link', () => {
    const ItemsTitle = <h1>Items</h1>;
    wrapper.find('[href="/items"]').simulate("click", {button: 0});

    expect(wrapper.contains(ItemsTitle)).toEqual(true);
    expect(wrapper.find(Item).length).toEqual(items.length);
});
