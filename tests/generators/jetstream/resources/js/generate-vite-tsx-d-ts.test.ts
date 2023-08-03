// ./tests/generators/jetstream/resources/js/generate-vite-tsx-d-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateViteTsxDTs from '../../../../../src/generators/jetstream/resources/js/generate-vite-tsx-d-ts'

describe('./src/generators/jetstream/resources/js/generate-vite-tsx-d-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateViteTsxDTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateViteTsxDTs() === 'string').toBe(true)

    })

})
