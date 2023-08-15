// ./tests/generators/jetstream/resources/js/Components/generate-dropdown-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateDropdownVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-dropdown-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-dropdown-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateDropdownVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateDropdownVue() === 'string').toBe(true)

    })

})
