// ./tests/generators/jetstream/resources/js/generate-app-vv-classes-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppVvClassesTs from '../../../../../src/generators/jetstream/resources/js/generate-app-vv-classes-ts'

describe('./src/generators/jetstream/resources/js/generate-app-vv-classes-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppVvClassesTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppVvClassesTs() === 'string').toBe(true)

    })

})
