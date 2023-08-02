// ./src/installers/jetstream/installAppJetstreamTypesTs.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateAppJetstreamTypesTs from '../../generators/jetstream/generateAppJetstreamTypesTs.js';
export default function () {
    installWhenNoFile('/resources/js/Types/', 'app-jetstream-types.ts', generateAppJetstreamTypesTs());
}
//# sourceMappingURL=installAppJetstreamTypesTs.js.map