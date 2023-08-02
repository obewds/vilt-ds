// ./src/installers/jetstream/installAppVvClassesTypesTs.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateAppVvClassesTypesTs from '../../generators/jetstream/generateAppVvClassesTypesTs.js';
export default function () {
    installWhenNoFile('/resources/js/Types/', 'app-vv-classes-types.ts', generateAppVvClassesTypesTs());
}
//# sourceMappingURL=installAppVvClassesTypesTs.js.map