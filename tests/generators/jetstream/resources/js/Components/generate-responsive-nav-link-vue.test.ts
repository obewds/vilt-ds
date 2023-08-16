// ./tests/generators/jetstream/resources/js/Components/generate-responsive-nav-link-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateResponsiveNavVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-responsive-nav-link-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-responsive-nav-link-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateResponsiveNavVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateResponsiveNavVue() === 'string').toBe(true)

    })

})
