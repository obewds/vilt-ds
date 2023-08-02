// ./src/installers/jetstream/installAppVvClassesTs.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateAppVvClassesTs from '../../generators/jetstream/generateAppVvClassesTs.js';
export default function () {
    installWhenNoFile('/resources/js/', 'app.vv.classes.ts', generateAppVvClassesTs());
}
//# sourceMappingURL=installAppVvClassesTs.js.map