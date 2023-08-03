// ./tests/generators/jetstream/generate-tsconfig-json.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTsconfigJson from '../../../src/generators/jetstream/generate-tsconfig-json'

describe('./src/generators/jetstream/vscode/generate-tsconfig-json module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTsconfigJson).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTsconfigJson() === 'string').toBe(true)

    })

})
