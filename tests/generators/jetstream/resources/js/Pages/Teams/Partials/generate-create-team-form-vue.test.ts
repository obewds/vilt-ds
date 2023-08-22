// ./tests/generators/jetstream/resources/js/Pages/Teams/Partials/generate-create-team-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateCreateTeamFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-create-team-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-create-team-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateCreateTeamFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateCreateTeamFormVue() === 'string').toBe(true)

    })

})
