import { mount } from '@vue/test-utils'
import Vue from 'vue'
import OrdisActionButton from '../OrdisActionButton.vue'
import Vuetify from 'vuetify'

const factory = (values = {}) => {
    return mount(OrdisActionButton, {
        props:
            { ...values }
    })
}

//fix for  [Vuetify] Unable to locate target [data-app] warning
const el = document.createElement('div')
el.setAttribute('data-app', true)
document.body.appendChild(el)

describe('OrdisActionButton', () => {
    Vue.use(Vuetify)

    test('Is an instance of Vue', () => {
        const wrapper = factory()
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('There is an icon', () => {
        const wrapper = factory()
        expect(wrapper.find('.v-icon').exists()).toBe(true)
    })

    test('Do not render the tooltip if the "btnTooltip" property is not set', () => {
        const wrapper = factory()
        expect(wrapper.find('.v-tooltip').exists()).toBe(false)
    })

    test('Render hint if "btnTooltip" property is set', () => {
        const wrapper = factory({ btnTooltip: 'xxx' })
        expect(wrapper.find('.v-tooltip').exists()).toBe(true)
    })
})
