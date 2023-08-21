// ./tests/generators/jetstream/resources/js/Pages/Profile/generate-profile-show-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateProfileShowVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Profile/generate-profile-show-vue'

describe('./src/generators/jetstream/resources/js/Pages/Profile/generate-profile-show-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateProfileShowVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateProfileShowVue() === 'string').toBe(true)

    })

})
