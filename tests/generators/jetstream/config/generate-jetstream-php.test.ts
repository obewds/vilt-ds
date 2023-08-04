// ./tests/generators/jetstream/generate-jetstream-php.test.ts

import { describe, expect, test } from '@jest/globals'
import generateJetstreamPhp from '../../../../src/generators/jetstream/config/generate-jetstream-php'

describe('./src/generators/jetstream/vscode/generate-jetstream-php.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateJetstreamPhp).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateJetstreamPhp() === 'string').toBe(true)

    })

})
