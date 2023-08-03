// ./tests/generators/jetstream/generate-gitignore.test.ts

import { describe, expect, test } from '@jest/globals'
import generateGitignore from '../../../src/generators/jetstream/generate-gitignore'

describe('./src/generators/jetstream/vscode/generate-gitignore.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateGitignore).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateGitignore('# some gitignore text to insert') === 'string').toBe(true)

    })

})
