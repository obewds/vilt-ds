// ./tests/generators/jetstream/routes/generate-web-php.test.ts

import { describe, expect, test } from '@jest/globals'
import generateWebPhp from '../../../../src/generators/jetstream/routes/generate-web-php'

describe('./src/generators/jetstream/vscode/generate-web-php.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateWebPhp).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateWebPhp() === 'string').toBe(true)

    })

})
