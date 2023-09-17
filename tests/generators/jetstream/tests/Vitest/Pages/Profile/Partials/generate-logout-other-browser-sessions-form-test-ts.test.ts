// ./tests/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateLogoutOtherBrowserSessionsFormTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-logout-other-browser-sessions-form-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateLogoutOtherBrowserSessionsFormTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateLogoutOtherBrowserSessionsFormTestTs() === 'string').toBe(true)

    })

})
