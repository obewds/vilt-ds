// ./tests/generators/jetstream/resources/js/generate-bootstrap-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateBootstrapTs from '../../../../../src/generators/jetstream/resources/js/generate-bootstrap-ts'

describe('./src/generators/jetstream/resources/js/generate-bootstrap-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateBootstrapTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateBootstrapTs() === 'string').toBe(true)

    })

})
