// ./tests/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-profile-information-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateUpdateProfileInformationFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-profile-information-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-profile-information-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateUpdateProfileInformationFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateUpdateProfileInformationFormVue() === 'string').toBe(true)

    })

})
