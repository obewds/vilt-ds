// ./tests/generators/jetstream/resources/js/Components/generate-dropdown-link-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateDropdownLinkVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-dropdown-link-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-dropdown-link-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateDropdownLinkVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateDropdownLinkVue() === 'string').toBe(true)

    })

})
