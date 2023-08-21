// ./tests/generators/jetstream/resources/js/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateLogoutOtherBrowserSessionsFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateLogoutOtherBrowserSessionsFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateLogoutOtherBrowserSessionsFormVue() === 'string').toBe(true)

    })

})
