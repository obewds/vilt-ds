// ./tests/generators/jetstream/tests/Vitest/Components/generate-nav-link-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateNavLinkTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-nav-link-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-nav-link-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateNavLinkTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateNavLinkTest() === 'string').toBe(true)

    })

})
