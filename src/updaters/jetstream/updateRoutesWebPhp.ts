// ./src/updaters/jetstream/updateRoutesWebPhp.ts

import fs from 'fs-extra'

import cliSuccessMessage from '../../helpers/cli-success-message.js'
import cliWarningMessage from '../../helpers/cli-warning-message.js'
import cwd from '../../helpers/cwd.js'
import projectFileDoesExist from '../../helpers/project-file-does-exist.js'

const newRoutesWebPhpCode = `})->name('dashboard');
    Route::get('/vueventus', function () {
        return Inertia::render('VueVentus');
    })->name('vueventus');`

export default function (): void {

    const filename = 'web.php'
    const filepath = '/routes/' + filename

    if ( projectFileDoesExist(filepath) ) {

        fs.readFile(cwd + filepath, 'utf8', function(err, data) {
            
            // error check
            if (err) { throw err }

            let modifiedData = String(data).replace(
                `    })->name('dashboard');`,
                newRoutesWebPhpCode
            )
            
            // If no error, then overwrite the current config/jetstream.php file content with the modifications
            fs.outputFileSync(cwd + filepath, modifiedData, { flag: 'w+' })

            cliSuccessMessage('.' + filepath + ' file was updated successfully!', false, false)

        })

    } else {

        cliWarningMessage('.' + filepath + ' was not found, so no updates were made!', false, false)

    }

}