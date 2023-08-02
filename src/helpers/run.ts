// ./cli/helpers/run.ts

import child_process from 'child_process'

export default function (installString:string): void {

    child_process.execSync( installString, { stdio: 'inherit' } )
    
}
