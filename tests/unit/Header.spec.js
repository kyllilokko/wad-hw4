// Import the mount() method from the test utils

// and the component you want to test

import { mount } from '@vue/test-utils'

import Header from "../../src/components/Header.vue";


describe('Header', () => {

    // Now mount the component and you have the wrapper

    const wrapper = mount(Header)


    it('renders the correct weekday', () => {
        console.log("HTML",wrapper.html())

        let today = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let weekday = days[ today.getDay() ].toUpperCase()
        console.log("HTML",weekday)
        expect(wrapper.html()).toContain(weekday)

    })

    it('renders the correct date', () => { // Check that component properly displays today's date (i.e. the day of month)

        let today = new Date();

        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        console.log("HTML",date)
        expect(wrapper.html()).toContain(date)

    })

    it('renders the correct month', () => {

        let today = new Date();
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',	'Nov', 'Dec'];

        let month = months[ today.getMonth() ].toUpperCase()
        console.log("HTML",month)
        expect(wrapper.html()).toContain(month)

    })

    it('renders the correct year', () => {

        let today = new Date();

        let year = today.getFullYear()
        console.log("HTML",year)
        expect(wrapper.html()).toContain(year)

    })

});