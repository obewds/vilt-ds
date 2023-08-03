// ./src/installers/jetstream/installTsconfigJson.ts
import installWhenNoFile from '../../helpers/install-when-no-file.js';
import generateTsconfigJson from '../../generators/jetstream/generate-tsconfig-json.js';
export default function () {
    installWhenNoFile('/', 'tsconfig.json', generateTsconfigJson());
}
//# sourceMappingURL=installTsconfigJson.js.map