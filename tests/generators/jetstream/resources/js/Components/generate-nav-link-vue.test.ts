// ./tests/generators/jetstream/resources/js/Components/generate-nav-link-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateNavLinkVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-nav-link-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-nav-link-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateNavLinkVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateNavLinkVue() === 'string').toBe(true)

    })

})
