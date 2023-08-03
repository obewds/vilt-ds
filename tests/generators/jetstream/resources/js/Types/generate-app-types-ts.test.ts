// ./tests/generators/jetstream/resources/js/Types/generate-app-types-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppTypesTs from '../../../../../../src/generators/jetstream/resources/js/Types/generate-app-types-ts'

describe('./src/generators/jetstream/resources/js/Types/generate-app-types-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppTypesTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppTypesTs() === 'string').toBe(true)

    })

})
