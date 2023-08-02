// ./tests/helpers/cliStartMessage.test.ts

import { describe, expect, test } from '@jest/globals'
import gradientText from '../../src/helpers/gradientText'

describe('gradientText module', () => {

    test('module can be imported successfully', () => {

        expect(gradientText).toBeTruthy()

    })

    test('module accepts and returns a string value', () => {

        const result = gradientText('test')

        expect(typeof result === 'string').toBe(true)

    })

    test('module returns a string argument with a string containing each argument string character', () => {

        const testValue = 'test'
        const result = gradientText(testValue)
        const testCharacters = testValue.split('')

        testCharacters.forEach( (character) => {
            expect(result.includes(character)).toBe(true)
        })

    })

})
