// ./tests/installers/dependencies/install-jetstream-npm-deps.test.ts

import { describe, expect, test } from '@jest/globals'
import installJetstreamNpmDeps from '../../../src/installers/dependencies/install-jetstream-npm-deps'

describe('./src/installers/dependencies/install-jetstream-npm-deps module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(installJetstreamNpmDeps).toBeTruthy()

    })

})
