// ./cli/helpers/cliSuccessMessage.ts

import gradientText from './gradient-text.js'

export default function (string:string, prefixLineBreak:boolean = false, suffixLineBreak:boolean = false): void {

    if (prefixLineBreak) { console.log(' ') }

    console.log(gradientText(string))

    if (suffixLineBreak) { console.log(' ') }

}
