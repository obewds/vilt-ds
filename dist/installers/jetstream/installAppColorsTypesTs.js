// ./src/installers/jetstream/installAppColorsTypesTs.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateAppColorsTypesTs from '../../generators/jetstream/resources/js/Types/generate-app-colors-types-ts.js';
export default function () {
    installWhenNoFile('/resources/js/Types/', 'app-colors-types.ts', generateAppColorsTypesTs());
}
//# sourceMappingURL=installAppColorsTypesTs.js.map