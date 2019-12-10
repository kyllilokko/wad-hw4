import {mount} from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('when there are no item in the List, component displays text: Add your first Todo task', () => {

    let propsList = [];


    const wrapper = mount(List, {
        propsData: {
            list: propsList
        }
    });

    it('Add your first Todo task is displayed', () => {
        let listItems = wrapper.findAll(".list-item");

        if (listItems.length === 0) {
            expect(wrapper.html()).toContain("Add your first Todo task")
        }

    })


});