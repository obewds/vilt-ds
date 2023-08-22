// ./tests/generators/jetstream/resources/js/Pages/Teams/Partials/generate-update-team-name-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateUpdateTeamNameFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-update-team-name-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-update-team-name-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateUpdateTeamNameFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateUpdateTeamNameFormVue() === 'string').toBe(true)

    })

})
