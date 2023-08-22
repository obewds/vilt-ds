// ./tests/generators/jetstream/resources/js/generate-ziggy-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateZiggyTs from '../../../../../src/generators/jetstream/resources/js/generate-ziggy-ts'

describe('./src/generators/jetstream/resources/js/generate-ziggy-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateZiggyTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateZiggyTs() === 'string').toBe(true)

    })

})
