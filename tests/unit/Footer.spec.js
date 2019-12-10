import { mount } from '@vue/test-utils'

import Footer from "../../src/components/Footer.vue";

describe('Footer', ()=> {

    const wrapper = mount(Footer);

    it('When + is clicked, property open changes to true', () => {
        wrapper.find('.container span').trigger('click');

        expect(wrapper.vm.open).toEqual(true);
    });

    it('when task is added, footer component is hidden and textfield cleared', () => {

        wrapper.find('.container input').trigger('keyup.enter');

        expect(wrapper.vm.open).toEqual(false);
        expect(wrapper.vm.title).toEqual("");
    })
});