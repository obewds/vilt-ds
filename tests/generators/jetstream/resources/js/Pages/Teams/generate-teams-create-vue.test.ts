// ./tests/generators/jetstream/resources/js/Pages/Teams/generate-teams-create-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateTeamsCreateVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Teams/generate-teams-create-vue'

describe('./src/generators/jetstream/resources/js/Pages/Teams/generate-teams-create-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateTeamsCreateVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateTeamsCreateVue() === 'string').toBe(true)

    })

})
