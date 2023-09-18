// ./src/updaters/jetstream-api-tests.ts
import installFile from '../helpers/install-file.js';
import generateApiTokenManagerTestTs from '../generators/jetstream/tests/Vitest/Pages/API/Partials/generate-api-token-manager-test-ts.js';
import generateApiIndexTestTs from '../generators/jetstream/tests/Vitest/Pages/API/generate-api-index-test-ts.js';
export default function () {
    installFile('/tests/Vitest/Pages/API/Partials/ApiTokenManager.test.ts', generateApiTokenManagerTestTs());
    installFile('/tests/Vitest/Pages/API/Index.test.ts', generateApiIndexTestTs());
}
//# sourceMappingURL=jetstream-api-tests.js.map