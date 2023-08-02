// ./src/installers/jetstream/installAppColorsTypesTs.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateAppColorsTypesTs from '../../generators/jetstream/generateAppColorsTypesTs.js';
export default function () {
    installWhenNoFile('/resources/js/Types/', 'app-colors-types.ts', generateAppColorsTypesTs());
}
//# sourceMappingURL=installAppColorsTypesTs.js.map