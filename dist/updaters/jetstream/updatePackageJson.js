// ./src/updaters/jetstream/updatePackageJson.ts
import run from '../../helpers/run.js';
export default function () {
    run(`npm pkg set scripts.mailpit="open http://127.0.0.1:8025/"`);
}
//# sourceMappingURL=updatePackageJson.js.map