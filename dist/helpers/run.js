// ./src/helpers/run.ts
import child_process from 'child_process';
export default function (installString) {
    child_process.execSync(installString, { stdio: 'inherit' });
}
//# sourceMappingURL=run.js.map