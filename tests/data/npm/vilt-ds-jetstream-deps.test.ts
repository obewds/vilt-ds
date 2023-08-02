// ./tests/data/npm/vilt-ds-jetstream-deps.test.ts

import { describe, expect, test } from '@jest/globals'

import viltDsJetstreamDeps from '../../../src/data/npm/vilt-ds-jetstream-deps'

describe('./src/data/npm/vilt-ds-jetstream-deps module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsJetstreamDeps).toBeTruthy()

    })

    test('module default value is a valid array', () => {

        expect(Array.isArray(viltDsJetstreamDeps)).toBe(true)

    })

})
