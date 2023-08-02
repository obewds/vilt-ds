// ./src/installers/jetstream/installAppVvTs.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateAppVvTs from '../../generators/jetstream/generateAppVvTs.js';
export default function () {
    installWhenNoFile('/resources/js/', 'app.vv.ts', generateAppVvTs());
}
//# sourceMappingURL=installAppVvTs.js.map