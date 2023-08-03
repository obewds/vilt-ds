// ./tests/generators/jetstream/resources/js/generate-vite-window-d-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateViteWindowDTs from '../../../../../src/generators/jetstream/resources/js/generate-vite-window-d-ts'

describe('./src/generators/jetstream/resources/js/generate-vite-window-d-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateViteWindowDTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateViteWindowDTs() === 'string').toBe(true)

    })

})
