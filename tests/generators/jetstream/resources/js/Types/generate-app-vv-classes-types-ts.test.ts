// ./tests/generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppVvClassesTypesTs from '../../../../../../src/generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts'

describe('./src/generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppVvClassesTypesTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppVvClassesTypesTs() === 'string').toBe(true)

    })

})
