// ./tests/data/gitignore/vilt-ds-mac-gitignore.test.ts

import { describe, expect, test } from '@jest/globals'

import viltDsMacGitignore from '../../../src/data/gitignore/vilt-ds-mac-gitignore'

describe('./src/data/gitignore/vilt-ds-mac-gitignore module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsMacGitignore).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof viltDsMacGitignore === 'string').toBe(true)

    })

})
