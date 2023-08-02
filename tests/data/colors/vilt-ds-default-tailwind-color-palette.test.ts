// ./tests/data/colors/vilt-ds-default-tailwind-color-palette.test.ts

import { describe, expect, test } from '@jest/globals'

import viltDsDefaultTailwindColorPalette from '../../../src/data/colors/vilt-ds-default-tailwind-color-palette'

describe('./src/data/colors/vilt-ds-default-tailwind-color-palette module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsDefaultTailwindColorPalette).toBeTruthy()

    })

    test('module default value is a valid object', () => {

        expect(typeof viltDsDefaultTailwindColorPalette === 'object').toBe(true)

    })

})
