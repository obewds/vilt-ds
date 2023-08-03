// ./tests/generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppJetstreamTypesTs from '../../../../../../src/generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts'

describe('./src/generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppJetstreamTypesTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppJetstreamTypesTs() === 'string').toBe(true)

    })

})
