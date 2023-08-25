// ./src/helpers/cli-warning-message.ts

import gradient from 'gradient-string'

export default function (string:string, prefixLineBreak:boolean, suffixLineBreak:boolean): void {

    if (prefixLineBreak) { console.log(' ') }

    console.log(gradient.morning(string))

    if (suffixLineBreak) { console.log(' ') }

}
