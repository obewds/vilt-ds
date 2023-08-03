// ./tests/generators/jetstream/resources/views/generate-app-blade-php.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppBladePhp from '../../../../../src/generators/jetstream/resources/views/generate-app-blade-php'

describe('./src/generators/jetstream/resources/views/generate-app-blade-ph module', () => {

    test('module can be imported successfully', () => {

        expect(generateAppBladePhp).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppBladePhp() === 'string').toBe(true)

    })

})
