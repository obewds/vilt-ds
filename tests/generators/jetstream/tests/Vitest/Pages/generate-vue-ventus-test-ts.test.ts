// ./tests/generators/jetstream/tests/Vitest/Pages/generate-vue-ventus-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVueVentusTestTs from '../../../../../../src/generators/jetstream/tests/Vitest/Pages/generate-vue-ventus-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Pages/generate-vue-ventus-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVueVentusTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVueVentusTestTs() === 'string').toBe(true)

    })

})
