// ./tests/generators/jetstream/resources/js/Types/generate-app-colors-types-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppColorsTypesTs from '../../../../../../src/generators/jetstream/resources/js/Types/generate-app-colors-types-ts'

describe('./src/generators/jetstream/resources/js/Types/generate-app-colors-types-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppColorsTypesTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppColorsTypesTs() === 'string').toBe(true)

    })

})
