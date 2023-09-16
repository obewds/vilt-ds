// ./tests/generators/jetstream/tests/Vitest/Pages/generate-dashboard-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateDashboardTestTs from '../../../../../../src/generators/jetstream/tests/Vitest/Pages/generate-dashboard-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-dashboard-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateDashboardTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateDashboardTestTs() === 'string').toBe(true)

    })

})
