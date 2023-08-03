// ./tests/generators/jetstream/resources/js/generate-app-vv-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppVvTs from '../../../../../src/generators/jetstream/resources/js/generate-app-vv-ts'

describe('./src/generators/jetstream/resources/js/generate-app-vv-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppVvTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppVvTs() === 'string').toBe(true)

    })

})
