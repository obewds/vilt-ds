// ./tests/generators/jetstream/tests/Vitest/Components/generate-application-mark-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateApplicationMarkTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-application-mark-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-application-mark-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateApplicationMarkTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateApplicationMarkTest() === 'string').toBe(true)

    })

})
