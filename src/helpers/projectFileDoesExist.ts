// ./src/helpers/projectFileDoesExist.ts

import fs from 'fs-extra'

import cwd from './cwd.js'

export default function (filepath:string): boolean {

    const currentFilepath = cwd + filepath

    try {
        if (fs.existsSync(currentFilepath)) {
            return true
        }
    } catch(err) {
        console.error(err)
        return false
    }

}