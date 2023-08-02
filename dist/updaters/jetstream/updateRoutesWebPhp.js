// ./src/updaters/jetstream/updateRoutesWebPhp.ts
import fs from 'fs-extra';
import cliSuccessMessage from '../../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../../helpers/cliWarningMessage.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js';
const newRoutesWebPhpCode = `})->name('dashboard');
    Route::get('/vueventus', function () {
        return Inertia::render('VueVentus');
    })->name('vueventus');`;
export default function () {
    const filename = 'web.php';
    const filepath = '/routes/' + filename;
    if (projectFileDoesExist(filepath)) {
        fs.readFile(cwd + filepath, 'utf8', function (err, data) {
            // error check
            if (err) {
                throw err;
            }
            let modifiedData = String(data).replace(`    })->name('dashboard');`, newRoutesWebPhpCode);
            // If no error, then overwrite the current config/jetstream.php file content with the modifications
            fs.outputFileSync(cwd + filepath, modifiedData, { flag: 'w+' });
            cliSuccessMessage('.' + filepath + ' file was updated successfully!', false, false);
        });
    }
    else {
        cliWarningMessage('.' + filepath + ' was not found, so no updates were made!', false, false);
    }
}
//# sourceMappingURL=updateRoutesWebPhp.js.map