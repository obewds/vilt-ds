// ./src/installers/jetstream/installAppVvClassesTypesTs.ts
import installWhenNoFile from '../../helpers/install-when-no-file.js';
import generateAppVvClassesTypesTs from '../../generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts.js';
export default function () {
    installWhenNoFile('/resources/js/Types/', 'app-vv-classes-types.ts', generateAppVvClassesTypesTs());
}
//# sourceMappingURL=installAppVvClassesTypesTs.js.map