// ./tests/generators/jetstream/resources/js/Pages/Teams/Partials/generate-delete-team-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateDeleteTeamFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-delete-team-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-delete-team-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateDeleteTeamFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateDeleteTeamFormVue() === 'string').toBe(true)

    })

})
