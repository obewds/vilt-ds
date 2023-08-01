// ./cli/helpers/cliWarningMessage.ts

import gradient from 'gradient-string'

export default function (string:string, prefixLineBreak:boolean = false, suffixLineBreak:boolean = false): void {

    if (prefixLineBreak) { console.log(' ') }

    console.log(gradient.morning(string))

    if (suffixLineBreak) { console.log(' ') }

}
