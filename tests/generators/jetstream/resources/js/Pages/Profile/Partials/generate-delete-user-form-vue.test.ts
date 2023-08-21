// ./tests/generators/jetstream/resources/js/Pages/Profile/Partials/generate-delete-user-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateDeleteUserFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-delete-user-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-delete-user-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateDeleteUserFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateDeleteUserFormVue() === 'string').toBe(true)

    })

})
