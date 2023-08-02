// ./tests/data/gitignore/vilt-ds-developer-gitignore.test.ts

import { describe, expect, test } from '@jest/globals'

import viltDsDeveloperGitignore from '../../../src/data/gitignore/vilt-ds-developer-gitignore'

describe('./src/data/gitignore/vilt-ds-developer-gitignore module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsDeveloperGitignore).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof viltDsDeveloperGitignore === 'string').toBe(true)

    })

})
