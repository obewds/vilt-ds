// ./src/generators/jetstream/tests/Vitest/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Profile/LogoutOtherBrowserSessionsForm.test.ts

import { mount } from '@vue/test-utils'
import LogoutOtherBrowserSessionsForm from '../../../../../resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue'

test('Profile/LogoutOtherBrowserSessionsForm.vue component imports successfully', async () => {

    expect(LogoutOtherBrowserSessionsForm).toBeTruthy()

})
`;

}
