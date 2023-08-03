// ./tests/helpers/cli-start-message.test.ts

import { describe, expect, test } from '@jest/globals'
import cliStartMessage from '../../src/helpers/cli-start-message'


const consoleLogs = jest.spyOn(console, 'log').mockImplementation(() => {})


describe('./src/helpers/cli-start-message module', () => {

    test('module can be imported successfully', () => {

        expect(cliStartMessage).toBeTruthy()

    })

    test('module method invokes without errors or return artifacts', () => {

        const test = cliStartMessage()

        expect(consoleLogs).toBeCalled()

    })

})


consoleLogs.mockReset()

