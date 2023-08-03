// ./tests/helpers/cli-warning-message.test.ts

import { describe, expect, test } from '@jest/globals'
import cliWarningMessage from '../../src/helpers/cli-warning-message'


const consoleLogs = jest.spyOn(console, 'log').mockImplementation(() => {})


describe('./src/helpers/cli-warning-message module', () => {

    test('module can be imported successfully', () => {

        expect(cliWarningMessage).toBeTruthy()

    })

    test('module method invokes without errors or return artifacts', () => {

        const test = cliWarningMessage('test', true, true)
        const testTwo = cliWarningMessage('test', false, false)

        expect(consoleLogs).toBeCalled()

    })

})


consoleLogs.mockReset()

