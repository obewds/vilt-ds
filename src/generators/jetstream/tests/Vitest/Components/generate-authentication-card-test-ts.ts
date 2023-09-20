// ./src/generators/jetstream/tests/Vitest/Components/generate-authentication-card-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Components/AuthenticationCard.test.ts

import { mount } from '@vue/test-utils'
import AuthenticationCard from '../../../resources/js/Components/AuthenticationCard.vue'


test('AuthenticationCard.vue component imports successfully', async () => {

    expect(AuthenticationCard).toBeTruthy()

})
`;

}
