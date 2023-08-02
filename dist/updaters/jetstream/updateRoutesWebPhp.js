// ./src/updaters/jetstream/updateRoutesWebPhp.ts
import fs from 'fs-extra';
import cliSuccessMessage from '../../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../../helpers/cliWarningMessage.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js';
const newRoutesWebPhpCode = `});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/vueventus', function () {
        return Inertia::render('VueVentus');
    })->name('vueventus');

});`;
export default function () {
    const filename = 'web.php';
    const filepath = '/routes/' + filename;
    if (projectFileDoesExist(filepath)) {
        fs.readFile(cwd + filepath, 'utf8', function (err, data) {
            // error check
            if (err) {
                throw err;
            }
            let modifiedData = String(data).replace('});', newRoutesWebPhpCode);
            // If no error, then overwrite the current config/jetstream.php file content with the modifications
            fs.outputFileSync(cwd + filepath, modifiedData, { flag: 'w+' });
            cliSuccessMessage(cwd + filepath + ' file updated successfully!', false, false);
        });
    }
    else {
        cliWarningMessage(cwd + filepath + ' not found, so no updates were made!', false, false);
    }
}
//# sourceMappingURL=updateRoutesWebPhp.js.map