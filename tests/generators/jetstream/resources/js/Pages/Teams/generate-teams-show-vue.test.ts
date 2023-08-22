// ./tests/generators/jetstream/resources/js/Pages/Teams/generate-teams-show-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateTeamsShowVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Teams/generate-teams-show-vue'

describe('./src/generators/jetstream/resources/js/Pages/Teams/generate-teams-show-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateTeamsShowVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateTeamsShowVue() === 'string').toBe(true)

    })

})
