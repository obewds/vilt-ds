// ./src/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-create-team-form-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Teams/CreateTeamForm.test.ts

import { mount } from '@vue/test-utils'
import CreateTeamForm from '../../../../../resources/js/Pages/Teams/Partials/CreateTeamForm.vue'

test('CreateTeamForm.vue component imports successfully', async () => {

    expect(CreateTeamForm).toBeTruthy()

})
`;

}
