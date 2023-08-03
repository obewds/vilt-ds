// ./tests/generators/jetstream/resources/js/generate-app-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppTs from '../../../../../src/generators/jetstream/resources/js/generate-app-ts'

describe('./src/generators/jetstream/resources/js/generate-app-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppTs() === 'string').toBe(true)

    })

})
