// ./tests/generators/jetstream/resources/js/generate-jetstream-gsap-ts.test.ts

import { describe, expect, test } from '@jest/globals'

import generateJetstreamGsapTs from '../../../../../src/generators/jetstream/resources/js/generate-jetstream-gsap-ts'

describe('./src/generators/jetstream/resources/js/generate-jetstream-gsap-ts module', () => {

    test('module can be imported successfully', () => {

        expect(generateJetstreamGsapTs).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateJetstreamGsapTs() === 'string').toBe(true)

    })

})
