// ./tests/generators/jetstream/vscode/generate-extensions-json.test.ts

import { describe, expect, test } from '@jest/globals'
import generateExtensionsJson from '../../../../src/generators/jetstream/vscode/generate-extensions-json'

describe('./src/generators/jetstream/vscode/generate-extensions-json module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateExtensionsJson).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateExtensionsJson() === 'string').toBe(true)

    })

})
