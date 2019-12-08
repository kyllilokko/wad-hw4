import { mount } from '@vue/test-utils'

import List from "../../src/components/List.vue";


describe('Renders correct amount of items and done items are updated correctly', () => {

    let propsList = [
        {
            id: 1,
            title: "test title 1",
            done: false
        },
        {
            id: 2,
            title: "test title 2",
            done: false
        },
        {
            id: 3,
            title: "test title 3",
            done: false
        },
        {
            id: 4,
            title: "test title 4",
            done: false
        },
    ]


    const wrapper = mount(List, {propsData: {
            list:propsList
        }})



    it('renders x amount of items', () => {

        //console.log("HTML",wrapper.html())

        let listItems=wrapper.findAll(".list-item");

        expect(listItems.length).toEqual(propsList.length);

    })
    it('checks amount of done items', () => {

        let doneItems=wrapper.findAll(".done");

        expect(doneItems.length).toEqual(propsList.filter(item => item.done).length);

    })
    it('item marked as done is updated correctly', () => {

        wrapper.find('.list-item span').trigger('click');

        //console.log("HTML",wrapper.html())

        expect(propsList.filter(item => item.done).length).toEqual(1); //first item of the list should be marked as done now
    })
    it('2 additional items marked as done are updated correctly', () => {

        wrapper.find('.list-item:nth-of-type(2) span').trigger('click');
        wrapper.find('.list-item:nth-of-type(3) span').trigger('click');


        expect(propsList.filter(item => item.done).length).toEqual(3); //two items + 1 previously clicked item should be marked as done now
    })
    it('2 done items marked as undone are updated correctly', () => {

        wrapper.find('.list-item:nth-of-type(1) span').trigger('click');
        wrapper.find('.list-item:nth-of-type(3) span').trigger('click');


        expect(propsList.filter(item => item.done).length).toEqual(1); //two done items are marked as undone
    })

});