// ./tests/data/gitignore/vilt-ds-windows-gitignore.test.ts

import { describe, expect, test } from '@jest/globals'

import viltDsWindowsGitignore from '../../../src/data/gitignore/vilt-ds-windows-gitignore'

describe('./src/data/gitignore/vilt-ds-windows-gitignore module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsWindowsGitignore).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof viltDsWindowsGitignore === 'string').toBe(true)

    })

})
